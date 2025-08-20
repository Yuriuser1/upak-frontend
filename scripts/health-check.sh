
#!/bin/bash

# =================================================================
# UPAK Frontend - Health Check Script
# =================================================================

set -e

# Configuration
APP_URL=${1:-"http://localhost:3000"}
TIMEOUT=30
RETRY_COUNT=5

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Health check function
check_endpoint() {
    local endpoint=$1
    local expected_status=${2:-200}
    local description=$3
    
    log_info "Checking: $description"
    
    for i in $(seq 1 $RETRY_COUNT); do
        local status_code
        status_code=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout $TIMEOUT "$APP_URL$endpoint" || echo "000")
        
        if [ "$status_code" = "$expected_status" ]; then
            log_success "$description - OK (HTTP $status_code)"
            return 0
        fi
        
        if [ $i -eq $RETRY_COUNT ]; then
            log_error "$description - FAILED (HTTP $status_code)"
            return 1
        fi
        
        log_warning "$description - Retry $i/$RETRY_COUNT (HTTP $status_code)"
        sleep 2
    done
}

# Performance check function
check_performance() {
    log_info "Checking response time..."
    
    local response_time
    response_time=$(curl -s -o /dev/null -w "%{time_total}" --connect-timeout $TIMEOUT "$APP_URL" || echo "0")
    
    if (( $(echo "$response_time < 2.0" | bc -l) )); then
        log_success "Response time: ${response_time}s - Good"
    elif (( $(echo "$response_time < 5.0" | bc -l) )); then
        log_warning "Response time: ${response_time}s - Acceptable"
    else
        log_error "Response time: ${response_time}s - Slow"
        return 1
    fi
}

# SSL check function (if HTTPS)
check_ssl() {
    if [[ $APP_URL == https* ]]; then
        log_info "Checking SSL certificate..."
        local ssl_expiry
        ssl_expiry=$(echo | timeout $TIMEOUT openssl s_client -servername $(echo $APP_URL | sed 's|https://||' | cut -d'/' -f1) -connect $(echo $APP_URL | sed 's|https://||' | cut -d'/' -f1):443 2>/dev/null | openssl x509 -noout -dates | grep notAfter | cut -d= -f2)
        
        if [ -n "$ssl_expiry" ]; then
            log_success "SSL certificate valid until: $ssl_expiry"
        else
            log_error "Unable to check SSL certificate"
            return 1
        fi
    fi
}

log_info "🏥 Starting health check for: $APP_URL"

# Basic checks
HEALTH_STATUS=0

# Main page
check_endpoint "/" 200 "Main page" || HEALTH_STATUS=1

# Health endpoint
check_endpoint "/api/health" 200 "Health API" || HEALTH_STATUS=1

# Contact endpoint
check_endpoint "/api/contact" 405 "Contact API" || HEALTH_STATUS=1

# Performance check
check_performance || HEALTH_STATUS=1

# SSL check (if HTTPS)
check_ssl || HEALTH_STATUS=1

# Docker health check (if running in container)
if command -v docker &> /dev/null && docker ps -q -f "name=upak" | grep -q .; then
    log_info "Checking Docker containers..."
    
    # Check app container
    if docker ps -f "name=upak_frontend" --format "table {{.Names}}\t{{.Status}}" | grep -q "Up"; then
        log_success "App container is running"
    else
        log_error "App container is not running"
        HEALTH_STATUS=1
    fi
    
    # Check database container
    if docker ps -f "name=db" --format "table {{.Names}}\t{{.Status}}" | grep -q "Up"; then
        log_success "Database container is running"
    else
        log_warning "Database container status unknown"
    fi
fi

# System resources check
log_info "Checking system resources..."

# Memory usage
if command -v free &> /dev/null; then
    local mem_usage
    mem_usage=$(free | grep Mem | awk '{printf("%.1f", $3/$2 * 100.0)}')
    if (( $(echo "$mem_usage < 80" | bc -l) )); then
        log_success "Memory usage: ${mem_usage}% - OK"
    else
        log_warning "Memory usage: ${mem_usage}% - High"
    fi
fi

# Disk usage
if command -v df &> /dev/null; then
    local disk_usage
    disk_usage=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$disk_usage" -lt 80 ]; then
        log_success "Disk usage: ${disk_usage}% - OK"
    else
        log_warning "Disk usage: ${disk_usage}% - High"
    fi
fi

# Final result
if [ $HEALTH_STATUS -eq 0 ]; then
    log_success "🎉 All health checks passed!"
    exit 0
else
    log_error "❌ Some health checks failed!"
    exit 1
fi

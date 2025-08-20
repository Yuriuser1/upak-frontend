
#!/bin/bash

# =================================================================
# UPAK Frontend - Deployment Script
# =================================================================

set -e

# Configuration
ENVIRONMENT=${1:-staging}
BUILD_TIMEOUT=600
HEALTH_CHECK_TIMEOUT=60

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

# Validate environment
if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
    log_error "Invalid environment: $ENVIRONMENT. Use 'staging' or 'production'"
    exit 1
fi

log_info "Starting deployment to $ENVIRONMENT..."

# Pre-deployment checks
log_info "Running pre-deployment checks..."

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    log_error "Docker is required for deployment"
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    log_error "Docker Compose is required for deployment"
    exit 1
fi

# Check environment file
ENV_FILE=".env.$ENVIRONMENT"
if [ ! -f "$ENV_FILE" ]; then
    log_error "Environment file $ENV_FILE not found"
    exit 1
fi

log_success "Pre-deployment checks passed"

# Build and deploy based on environment
if [ "$ENVIRONMENT" = "production" ]; then
    COMPOSE_FILE="docker-compose.prod.yml"
else
    COMPOSE_FILE="docker-compose.yml"
fi

log_info "Using compose file: $COMPOSE_FILE"

# Stop existing containers
log_info "Stopping existing containers..."
docker-compose -f "$COMPOSE_FILE" down --remove-orphans || true

# Build new images
log_info "Building application images..."
timeout $BUILD_TIMEOUT docker-compose -f "$COMPOSE_FILE" build --no-cache

# Start services
log_info "Starting services..."
docker-compose -f "$COMPOSE_FILE" up -d

# Health check
log_info "Performing health check..."
for i in {1..30}; do
    if curl -f -s http://localhost:3000/api/health > /dev/null; then
        log_success "Application is healthy"
        break
    fi
    
    if [ $i -eq 30 ]; then
        log_error "Health check failed"
        docker-compose -f "$COMPOSE_FILE" logs app
        exit 1
    fi
    
    log_info "Waiting for application to start... ($i/30)"
    sleep 2
done

# Show status
log_info "Deployment status:"
docker-compose -f "$COMPOSE_FILE" ps

# Show logs (last 20 lines)
log_info "Recent application logs:"
docker-compose -f "$COMPOSE_FILE" logs --tail=20 app

log_success "🎉 Deployment to $ENVIRONMENT completed successfully!"

if [ "$ENVIRONMENT" = "production" ]; then
    log_warning "Production deployment completed. Monitor logs for any issues."
else
    log_info "Staging deployment completed. Access at: http://localhost:3000"
fi

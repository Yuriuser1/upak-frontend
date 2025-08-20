
#!/bin/bash

# =================================================================
# UPAK Frontend - Backup Script
# =================================================================

set -e

# Configuration
BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="upak_frontend_$TIMESTAMP"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Create backup directory
mkdir -p "$BACKUP_DIR"

log_info "Creating backup: $BACKUP_NAME"

# Create backup archive
tar -czf "$BACKUP_DIR/$BACKUP_NAME.tar.gz" \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='coverage' \
    --exclude='*.log' \
    --exclude='.env.local' \
    --exclude='backups' \
    .

# Backup database (if using PostgreSQL with docker)
if docker ps | grep -q postgres; then
    log_info "Backing up database..."
    docker exec upak_frontend_db_1 pg_dump -U postgres upak_db > "$BACKUP_DIR/${BACKUP_NAME}_db.sql" || true
fi

# Create backup manifest
cat > "$BACKUP_DIR/${BACKUP_NAME}_manifest.txt" << EOF
UPAK Frontend Backup
====================
Date: $(date)
Environment: ${NODE_ENV:-development}
Git Commit: $(git rev-parse HEAD 2>/dev/null || echo "unknown")
Git Branch: $(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")

Files included:
- Application source code
- Configuration files
- Database dump (if available)

Files excluded:
- node_modules
- .next build directory
- Coverage reports
- Log files
- Environment variables (.env.local)
EOF

# Clean old backups (keep last 7 days)
find "$BACKUP_DIR" -name "upak_frontend_*.tar.gz" -mtime +7 -delete 2>/dev/null || true
find "$BACKUP_DIR" -name "upak_frontend_*_db.sql" -mtime +7 -delete 2>/dev/null || true
find "$BACKUP_DIR" -name "upak_frontend_*_manifest.txt" -mtime +7 -delete 2>/dev/null || true

log_success "Backup completed: $BACKUP_DIR/$BACKUP_NAME.tar.gz"
log_info "Backup manifest: $BACKUP_DIR/${BACKUP_NAME}_manifest.txt"

# List recent backups
log_info "Recent backups:"
ls -la "$BACKUP_DIR" | grep "upak_frontend_" | tail -5

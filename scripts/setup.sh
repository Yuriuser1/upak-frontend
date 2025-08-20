
#!/bin/bash

# =================================================================
# UPAK Frontend - Setup Script
# =================================================================

set -e

echo "🚀 Setting up UPAK Frontend..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
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

# Check requirements
log_info "Checking requirements..."

# Check Node.js
if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    log_error "Node.js version $NODE_VERSION is too old. Required: $REQUIRED_VERSION+"
    exit 1
fi

log_success "Node.js $NODE_VERSION is installed"

# Check Yarn
if ! command -v yarn &> /dev/null; then
    log_warning "Yarn is not installed. Installing via npm..."
    npm install -g yarn
fi

log_success "Yarn is available"

# Check Docker (optional)
if command -v docker &> /dev/null; then
    log_success "Docker is available"
else
    log_warning "Docker is not installed. Some features may not work."
fi

# Navigate to app directory
cd app

# Install dependencies
log_info "Installing dependencies..."
if [ -f "yarn.lock" ]; then
    yarn install --frozen-lockfile
elif [ -f "package-lock.json" ]; then
    npm ci
else
    yarn install
fi
log_success "Dependencies installed"

# Setup environment variables
log_info "Setting up environment variables..."
if [ ! -f ".env.local" ]; then
    if [ -f "../.env.example" ]; then
        cp ../.env.example .env.local
        log_success "Created .env.local from .env.example"
        log_warning "Please edit .env.local with your actual values"
    else
        log_error ".env.example file not found"
        exit 1
    fi
else
    log_info ".env.local already exists"
fi

# Generate Prisma client
log_info "Setting up database..."
if [ -f "prisma/schema.prisma" ]; then
    yarn prisma generate
    log_success "Prisma client generated"
else
    log_warning "Prisma schema not found, skipping database setup"
fi

# Run type check
log_info "Running type check..."
yarn type-check
log_success "TypeScript compilation successful"

# Run linting
log_info "Running ESLint..."
yarn lint --fix
log_success "Linting completed"

# Format code
log_info "Formatting code..."
yarn format
log_success "Code formatted"

# Build application
log_info "Building application..."
yarn build
log_success "Application built successfully"

log_success "🎉 UPAK Frontend setup completed!"
echo ""
log_info "Next steps:"
echo "1. Edit .env.local with your configuration"
echo "2. Setup your database (if needed): yarn db:push"
echo "3. Start development server: yarn dev"
echo ""
log_info "Useful commands:"
echo "- yarn dev          - Start development server"
echo "- yarn build        - Build for production"
echo "- yarn start        - Start production server"
echo "- yarn test         - Run tests"
echo "- yarn db:studio    - Open Prisma Studio"
echo ""

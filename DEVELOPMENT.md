# Form Builder Local Development Setup

## Prerequisites

- Docker and Docker Compose installed
- OR Node.js 18+ and PHP 8.2+ for local development

## Option 1: Development with Docker (Recommended)

### Start all services
```bash
docker-compose up -d
```

### Stop all services
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f
```

### Access services
- Frontend: http://localhost
- Backend API: http://localhost:8000
- MySQL: localhost:3306

## Option 2: Local Development (Without Docker)

### Backend Setup

```bash
cd backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=form_builder
DB_USERNAME=root
DB_PASSWORD=

# Run migrations
php artisan migrate

# Start Laravel server
php artisan serve
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:8000/api" > .env

# Start development server
npm run dev
```

## Troubleshooting

### Database connection issues
- Ensure MySQL is running
- Check database credentials in .env
- Run `php artisan config:clear`

### CORS issues
- Verify SANCTUM_STATEFUL_DOMAINS in backend/.env
- Check CORS configuration in Laravel

### Build errors
- Delete node_modules and reinstall
- Clear npm cache: `npm cache clean --force`


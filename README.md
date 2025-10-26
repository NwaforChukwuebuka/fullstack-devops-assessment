# Form Builder Application - Full-Stack & DevOps Assessment

## Overview

A complete Dynamic Form Builder application with React frontend, Laravel backend API, and containerized deployment setup. This application allows users to create custom forms through a drag-and-drop interface.

## Architecture

- **Frontend**: React 18 + Vite + Redux Toolkit + SASS + Ant Design + @dnd-kit
- **Backend**: Laravel 10 + Sanctum + MySQL
- **DevOps**: Docker Compose + GitHub Actions + Railway.app

## Project Structure

```
/frontend          # React application with Vite
/backend           # Laravel API
/docker            # Docker configuration files
/.github/workflows # CI/CD pipeline
```

## Features

- User authentication (register/login)
- Drag-and-drop form builder
- Multiple field types (text, radio, checkbox, file upload, dropdown)
- Form sections and groups organization
- Save and retrieve forms via API
- Docker containerization
- CI/CD pipeline with GitHub Actions

## Quick Start with Docker

```bash
# Clone the repository
git clone <repo-url>
cd fullstack-devops-assessment

# Copy environment files
cp backend/.env.example backend/.env

# Start all services
docker-compose up -d

# Run database migrations
docker-compose exec backend php artisan migrate

# Access the application
# Frontend: http://localhost
# Backend API: http://localhost:8000/api
```

## Environment Variables

### Backend (.env)
```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=form_builder
DB_USERNAME=root
DB_PASSWORD=password

SANCTUM_STATEFUL_DOMAINS=localhost:5173
SESSION_DOMAIN=localhost
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost/api
```

## API Endpoints

### Authentication
- POST /api/register - User registration
- POST /api/login - User login
- POST /api/logout - User logout  
- GET /api/user - Get authenticated user

### Forms
- GET /api/forms - List user's forms
- POST /api/forms - Create form
- GET /api/forms/{id} - Get form details
- PUT /api/forms/{id} - Update form
- DELETE /api/forms/{id} - Delete form

## Live Deployment

**URL**: [Deployment URL will be added]
**Platform**: Railway.app
**Status**: In progress

## Development

### Backend
```bash
cd backend
composer install
php artisan serve
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## License

MIT

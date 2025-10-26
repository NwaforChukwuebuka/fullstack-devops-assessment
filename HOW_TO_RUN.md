# How to Run the Form Builder Application

## Option 1: Frontend Only (Quick Start)

The frontend is ready to run without Docker. The backend API would need to be set up separately.

```bash
# Start the frontend development server
cd frontend
npm run dev

# Access at: http://localhost:5173
```

## Option 2: With Docker (Full Stack)

If you have Docker installed and running:

```bash
# Start all services (backend, frontend, database)
docker-compose up -d

# Run database migrations
docker-compose exec backend php artisan migrate

# Access at: http://localhost
```

## Option 3: Local Development (Backend + Frontend)

### Backend Setup (Requires PHP and Composer)

```bash
cd backend

# Install dependencies (requires Composer)
composer install

# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Run migrations
php artisan migrate

# Start server
php artisan serve
```

### Frontend Setup (Already Done!)

```bash
cd frontend

# Install dependencies (already done)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Access at: http://localhost:5173
```

## Current Status

✅ **Frontend**: Ready to run
- All dependencies installed
- TypeScript errors fixed
- Builds successfully
- Development server works

⚠️ **Backend**: Needs PHP/Composer setup
- Laravel files created
- Requires `composer install`
- Requires database setup

## Quick Start Commands

### To run just the frontend (works now):
```bash
cd frontend && npm run dev
```

### To run with Docker (if Docker is installed):
```bash
./start-dev.sh
```

### Alternative Docker start:
```bash
docker-compose up
```

## Next Steps

1. **If you want to test locally**: The frontend can run standalone, but you'll need the backend API
2. **For full functionality**: Set up the backend with PHP/Composer or use Docker
3. **For production**: Follow the RAILWAY.md guide to deploy to Railway.app

## Troubleshooting

### Frontend runs but shows errors?
- Check browser console for API connection errors
- Backend needs to be running on port 8000

### Want to skip backend setup for now?
- Frontend UI will work for viewing/testing the interface
- API calls will fail without the backend
- You can still see the form builder UI and layout

### Need help with PHP/Composer?
- Check DEVELOPMENT.md for detailed setup
- Or use the Docker approach which handles everything


# Railway Deployment Guide

## Overview
This application is designed to be deployed on Railway.app with separate services for frontend, backend, and database.

## Services Required

1. **MySQL Database** - PostgreSQL or MySQL
2. **Laravel Backend** - API service
3. **React Frontend** - Web service
4. **Nginx Proxy** - Optional (Railway handles routing)

## Setup Steps

### 1. Create Railway Project

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Link to existing project (if you have project ID)
railway link <project-id>
```

### 2. Add MySQL Service

In Railway dashboard:
- Click "New" → "Database" → "Add MySQL"
- Note the connection details provided

### 3. Add Backend Service

```bash
# Link to backend directory
cd backend
railway init

# Add environment variables
railway variables set \
  DB_HOST=${{MySQL.PRIVATE_URL_HOST}} \
  DB_DATABASE=${{MySQL.MYSQLDATABASE}} \
  DB_USERNAME=${{MySQL.MYSQLUSER}} \
  DB_PASSWORD=${{MySQL.MYSQLPASSWORD}} \
  APP_ENV=production \
  APP_DEBUG=false
```

### 4. Add Frontend Service

In Railway dashboard:
- Click "New" → "GitHub Repo"
- Select your repository
- Set root directory to `frontend`
- Add build command: `npm install --legacy-peer-deps && npm run build`
- Add start command: `npx serve -s dist -l 3000`

### 5. Environment Variables

#### Backend (.env)
```env
APP_NAME=Form Builder
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-app.railway.app

# Database (from Railway MySQL service)
DB_CONNECTION=mysql
DB_HOST=${{MySQL.PRIVATE_URL_HOST}}
DB_PORT=${{MySQL.PRIVATE_URL_PORT}}
DB_DATABASE=${{MySQL.MYSQLDATABASE}}
DB_USERNAME=${{MySQL.MYSQLUSER}}
DB_PASSWORD=${{MySQL.MYSQLPASSWORD}}

# Sanctum
SANCTUM_STATEFUL_DOMAINS=your-domain.com
SESSION_DOMAIN=your-domain.com
SESSION_DRIVER=redis
CACHE_DRIVER=redis

# Redis (optional)
REDIS_URL=${{Redis.REDIS_URL}}

# Generate new key
APP_KEY=base64:... # Generate with: php artisan key:generate
```

#### Frontend
```env
VITE_API_BASE_URL=https://your-backend.railway.app/api
```

### 6. Run Migrations

```bash
# Connect to backend service
railway run --service backend php artisan migrate --force

# Or manually in Railway dashboard
# Open backend service terminal and run:
php artisan migrate --force
```

### 7. Deploy

```bash
# Deploy all services
railway up

# Or use Railway dashboard to deploy
```

## Configuration Files

### railway.json (Backend)
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "composer install && php artisan key:generate --ansi"
  },
  "deploy": {
    "startCommand": "php artisan serve --host=0.0.0.0 --port=$PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### railway.json (Frontend)
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install --legacy-peer-deps && npm run build"
  },
  "deploy": {
    "startCommand": "npx serve -s dist -l $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

## Troubleshooting

### Database Connection Issues
- Verify MySQL service is running
- Check connection variables are set correctly
- Test connection manually: `railway run mysql -h$DB_HOST -u$DB_USERNAME -p$DB_PASSWORD`

### Build Failures
- Check logs in Railway dashboard
- Verify Node.js/PHP version compatibility
- Ensure all environment variables are set

### CORS Issues
- Update `SANCTUM_STATEFUL_DOMAINS` with your frontend domain
- Check `SESSION_DOMAIN` matches your domain
- Verify CORS middleware is configured in Laravel

## Monitoring

- View logs: `railway logs`
- Check service status in Railway dashboard
- Monitor database usage and performance

## Custom Domain

1. Go to Railway project settings
2. Click "Generate Domain" or "Add Custom Domain"
3. Update environment variables with new domain
4. Redeploy services

## Scaling

Railway automatically scales based on usage. For production:
- Consider adding Redis for sessions
- Enable database connection pooling
- Set up monitoring and alerts


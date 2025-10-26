# Railway Deployment Steps - Form Builder App

## Quick Deployment Checklist

### Pre-Deployment
- [x] Frontend builds successfully
- [x] Backend Laravel files created
- [x] Docker configuration ready
- [x] Railway config files created
- [ ] Git repository ready
- [ ] Railway account created

### Step 1: Set Up Railway Account

1. Go to https://railway.app
2. Sign up with GitHub (recommended) or email
3. Create a new project

### Step 2: Add MySQL Database

1. In Railway dashboard, click **"New"** → **"Database"** → **"Add MySQL"**
2. Railway will provision the database automatically
3. Note the connection details provided

### Step 3: Deploy Backend

1. In Railway dashboard, click **"New"** → **"GitHub Repo"**
2. Connect your repository
3. Select the project repository
4. Add a new service
5. Set **Root Directory** to: `backend`
6. Railway will detect the `railway.json` configuration automatically
7. Configure environment variables:

```env
APP_NAME=Form Builder
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:[will-be-generated]
DB_CONNECTION=mysql
DB_HOST=${{MySQL.PRIVATE_URL_HOST}}
DB_PORT=${{MySQL.PRIVATE_URL_PORT}}
DB_DATABASE=${{MySQL.MYSQLDATABASE}}
DB_USERNAME=${{MySQL.MYSQLUSER}}
DB_PASSWORD=${{MySQL.MYSQLPASSWORD}}
SANCTUM_STATEFUL_DOMAINS=${{Frontend.PUBLIC_DOMAIN}}
```

### Step 4: Deploy Frontend

1. In Railway dashboard, click **"New"** → **"GitHub Repo"**
2. Select the same repository
3. Add a new service for frontend
4. Set **Root Directory** to: `frontend`
5. Add environment variable:

```env
VITE_API_BASE_URL=https://[your-backend-url]/api
```

### Step 5: Run Migrations

1. Open the backend service in Railway
2. Go to **"Settings"** → **"Deploy Logs"**
3. Click **"Deploy Now"**
4. Once deployed, open the terminal
5. Run: `php artisan migrate --force`

### Step 6: Generate App Key

In the backend service terminal:
```
php artisan key:generate --ansi
```

### Step 7: Test Deployment

1. Open the frontend URL
2. Try to register a new user
3. Test login functionality
4. Create a test form
5. Verify form save functionality

## Quick Commands

### Using Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Link to project
railway link

# Deploy
railway up

# Run migrations
railway run php artisan migrate --force

# View logs
railway logs

# Check service status
railway status
```

## Expected URLs

- **Frontend**: `https://your-frontend.railway.app`
- **Backend API**: `https://your-backend.railway.app/api`

## Troubleshooting

### Build Fails
- Check Railway logs
- Verify environment variables
- Ensure correct Node.js/PHP version

### CORS Errors
- Update `SANCTUM_STATEFUL_DOMAINS` with frontend domain
- Verify frontend can reach backend API

### Database Issues
- Check MySQL connection variables
- Verify database service is running
- Run migrations manually

## Next Steps After Deployment

1. Test all functionality
2. Document the live URL
3. Create PR with deployment details
4. Add deployment URL to README


# Railway Deployment - Read This First!

This is a monorepo with separate frontend and backend services.

## ⚠️ Important: Deploy Services Separately

Do **NOT** deploy the root directory. You need to deploy **TWO separate services**:

1. **Backend Service** (root: `backend/`)
2. **Frontend Service** (root: `frontend/`)

## Quick Deployment Guide

### Step 1: Create MySQL Database
1. In Railway dashboard, click **"New"** → **"Database"** → **"Add MySQL"**
2. Railway will auto-provision MySQL

### Step 2: Deploy Backend
1. Click **"New"** → **"GitHub Repo"**
2. Select your repository
3. Click **"Configure Service"**
4. Set **Root Directory** to: `backend`
5. Railway will auto-detect `backend/railway.json`
6. Add environment variables from `RAILWAY_DEPLOYMENT.md`

### Step 3: Deploy Frontend  
1. Click **"New"** → **"GitHub Repo"**
2. Select your repository
3. Click **"Configure Service"**
4. Set **Root Directory** to: `frontend`
5. Railway will auto-detect `frontend/railway.json`
6. Add environment variable: `VITE_API_BASE_URL=https://your-backend-url/api`

### Step 4: Run Migrations
1. Open backend service
2. Click **Terminal**
3. Run: `php artisan migrate --force`
4. Run: `php artisan key:generate --ansi`

## Alternative: Use Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Add backend service
cd backend
railway add

# Add frontend service  
cd ../frontend
railway add

# Link to same project
railway link

# Deploy both
railway up
```

## Documentation

- `RAILWAY_DEPLOYMENT.md` - Detailed step-by-step guide
- `RAILWAY.md` - Full Railway deployment documentation
- `DEPLOY_TO_RAILWAY.md` - Quick deployment guide

## Troubleshooting

**Getting "could not determine how to build"?**
- Deploy backend and frontend as **separate services**
- Set **Root Directory** for each service
- Don't deploy the root directory

**Need help?**
- Check the documentation files
- Verify you're deploying the correct root directories
- See Railway logs for detailed error messages


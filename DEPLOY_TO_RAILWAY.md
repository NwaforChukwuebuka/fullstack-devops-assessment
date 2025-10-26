# How to Deploy Your Form Builder to Railway

## Current Status
✅ Your PR is open on the paxpass repository
✅ All code is committed locally
✅ Feature branch ready: `feature/fullstack-form-builder-deployment`

## Next Steps to Deploy to Railway

### Step 1: Push to Your Fork

You need to authenticate with GitHub first. Choose one:

**Option A: Using GitHub CLI (Easiest)**
```bash
# Install gh if needed
# Ubuntu: sudo apt install gh
# Or download from: https://cli.github.com/

# Login
gh auth login

# Then push
git push origin feature/fullstack-form-builder-deployment
```

**Option B: Configure Git Credentials**
```bash
# Set your GitHub username
git config --global user.name "NwaforChukwuebuka"
git config --global user.email "your-email@example.com"

# Then push (will prompt for credentials)
git push origin feature/fullstack-form-builder-deployment
```

**Option C: Use SSH (Recommended for long-term)**
```bash
# Change remote to SSH
git remote set-url origin git@github.com:NwaforChukwuebuka/fullstack-devops-assessment.git

# Add SSH key if not already done
# Generate key: ssh-keygen -t ed25519 -C "your-email@example.com"
# Add to GitHub: Settings > SSH Keys

# Then push
git push origin feature/fullstack-form-builder-deployment
```

### Step 2: Deploy to Railway

Once your code is pushed to your fork:

1. **Go to Railway.app**: https://railway.app
2. **Sign up/Login** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Connect your repository**: `NwaforChukwuebuka/fullstack-devops-assessment`
5. **Create 3 services**:

#### Service 1: MySQL Database
- **New** → **Database** → **Add MySQL**
- Railway will auto-provision

#### Service 2: Backend (Laravel)
- **New** → **GitHub Repo** → Select your repo
- **Root Directory**: `backend`
- Railway will auto-detect `railway.json`
- **Add Environment Variables**:
```env
APP_NAME=Form Builder
APP_ENV=production
APP_DEBUG=false
DB_CONNECTION=mysql
DB_HOST=${{MySQL.PRIVATE_URL_HOST}}
DB_PORT=${{MySQL.PRIVATE_URL_PORT}}
DB_DATABASE=${{MySQL.MYSQLDATABASE}}
DB_USERNAME=${{MySQL.MYSQLUSER}}
DB_PASSWORD=${{MySQL.MYSQLPASSWORD}}
SANCTUM_STATEFUL_DOMAINS=${{Frontend.PUBLIC_DOMAIN}}
```

#### Service 3: Frontend (React)
- **New** → **GitHub Repo** → Select your repo
- **Root Directory**: `frontend`
- Railway will auto-detect `railway.json`
- **Add Environment Variable**:
```env
VITE_API_BASE_URL=https://[backend-service-url]/api
```

### Step 3: Run Migrations

1. Open backend service in Railway
2. Click **Terminal** tab
3. Run: `php artisan migrate --force`
4. Run: `php artisan key:generate --ansi`

### Step 4: Test Your Deployment

1. Open the frontend URL
2. Test user registration
3. Test login
4. Create a form
5. Verify everything works!

## Alternative: Quick Deploy Script

If you want to automate the Railway setup, I can create a deployment script for you.

## Important Notes

✅ Your code is already committed locally
✅ You just need to push to GitHub
✅ Then Railway can deploy from your fork
✅ No need to merge your PR to paxpass - deploy from your fork!

## Troubleshooting

**Can't push to GitHub?**
- Install GitHub CLI: `sudo apt install gh`
- Or configure SSH keys
- Or use GitHub Desktop app

**Railway deployment issues?**
- Check the deployment logs in Railway dashboard
- Verify environment variables are set
- Make sure migrations ran successfully

Let me know if you need help with any step!


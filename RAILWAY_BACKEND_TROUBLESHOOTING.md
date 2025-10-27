# Railway Backend Troubleshooting Guide

## Current Status

Your backend is deployed at: `https://devops-backend.up.railway.app`
**Status**: ❌ Returns HTTP 500 errors on all endpoints
**Issue**: Database connection failure (most likely)

## Root Cause

The backend is responding but returning 500 errors because:
1. Database is not connected
2. Environment variables are missing or incorrect
3. Database migrations haven't been run

## Step-by-Step Fix

### 1. Check Railway Dashboard

Go to your Railway project: https://railway.app/dashboard

### 2. Verify Database Service

You need a MySQL database service in Railway:

**Option A: Add a MySQL Database Service**
1. In your Railway project, click "+ New" or "+ Add Service"
2. Select "Database" or "MySQL"
3. Railway will automatically provide you with connection details

**Option B: If you already have a database service**
1. Click on the database service in your project
2. Go to the "Variables" tab
3. Copy the connection details

### 3. Set Environment Variables

In your backend service, go to the "Variables" tab and ensure you have:

#### Required Environment Variables

```bash
APP_NAME="Form Builder API"
APP_ENV=production
APP_KEY=base64:YOUR_KEY_HERE
APP_DEBUG=false
APP_URL=https://devops-backend.up.railway.app

DB_CONNECTION=mysql
DB_HOST=[Get from Railway database service - usually something like mysql.railway.internal]
DB_PORT=[Get from Railway database service - usually 3306]
DB_DATABASE=[Get from Railway database service]
DB_USERNAME=[Get from Railway database service]
DB_PASSWORD=[Get from Railway database service]

LOG_CHANNEL=stack
LOG_LEVEL=error
```

#### How to Get Database Variables:

1. In Railway, go to your database service
2. Click the "Connect" or "Variables" tab
3. You'll see the connection details, or add them as environment variables to your backend service

Example (if Railway provides these automatically):
```
MYSQL_HOST=mysql.railway.internal
MYSQL_PORT=3306
MYSQLDATABASE=railway
MYSQLUSER=root
MYSQLPASSWORD=your-password
```

**If Railway provides `MYSQL_*` variables automatically**, map them in your backend service:
```bash
DB_CONNECTION=mysql
DB_HOST=$MYSQL_HOST
DB_PORT=$MYSQL_PORT
DB_DATABASE=$MYSQLDATABASE
DB_USERNAME=$MYSQLUSER
DB_PASSWORD=$MYSQLPASSWORD
```

### 4. Generate Application Key

The `APP_KEY` must be set. In Railway:

1. Go to your backend service
2. Click "Variables" tab
3. Click "Add Variable"
4. Add:
   - Key: `APP_KEY`
   - Value: `base64:generate-random-key-here`
   
**Or let the build process generate it** (check your Dockerfile line 43):
```dockerfile
RUN php artisan key:generate --ansi --force || true
```

### 5. Run Database Migrations

After setting up the database connection:

1. In Railway, go to your backend service
2. Click on the "Deployments" tab
3. Find the latest deployment
4. Click the three dots (menu)
5. Select "Execute Command" or open the terminal
6. Run:
```bash
php artisan migrate --force
```

**Alternative**: Check if your Dockerfile already runs migrations (line 46):
```dockerfile
RUN php artisan migrate --force || true
```

### 6. Check Logs

View the logs to see the actual error:

1. In Railway dashboard, open your backend service
2. Click on "Logs" tab
3. Look for error messages

Common errors you might see:
- "SQLSTATE[HY000] [2002]" - Cannot connect to database
- "Access denied for user" - Wrong credentials
- "Unknown database" - Database doesn't exist
- "Class 'PDO' not found" - PHP extension missing

### 7. Test the Backend

After fixing the database connection, test these endpoints:

**Health Check:**
```bash
curl https://devops-backend.up.railway.app/
```

**Test Database:**
```bash
curl https://devops-backend.up.railway.app/test-db
```

**Test Register Endpoint:**
```bash
curl -X POST https://devops-backend.up.railway.app/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

**Expected Response (Health Check):**
```json
{
    "message": "Backend is running",
    "database_connected": true,
    "database_name": "railway",
    "database_error": null,
    "environment": "production",
    "debug": false
}
```

## Quick Checklist

- [ ] MySQL database service is added to Railway project
- [ ] Database environment variables are set in backend service
- [ ] APP_KEY is set (or auto-generated)
- [ ] Database migrations are run
- [ ] Backend service is connected to database service
- [ ] Logs show no errors
- [ ] Health check endpoint returns 200 OK

## Common Issues and Solutions

### Issue: "Connection refused" or "Could not connect to database"
**Solution**: 
- Check that DB_HOST is correct (use Railway-provided internal hostname)
- Verify that your backend service is connected to the database service in Railway

### Issue: "Access denied for user"
**Solution**: 
- Check DB_USERNAME and DB_PASSWORD in environment variables
- Ensure credentials match Railway database credentials

### Issue: "Unknown database"
**Solution**: 
- Check DB_DATABASE environment variable
- Verify database name in Railway dashboard

### Issue: APP_KEY is empty
**Solution**: 
- Add APP_KEY to environment variables
- Or ensure Dockerfile generates it: `php artisan key:generate`

## Testing Tools

### Using curl:
```bash
# Check if backend is up
curl https://devops-backend.up.railway.app/

# Test database connection
curl https://devops-backend.up.railway.app/test-db

# Test API
curl https://devops-backend.up.railway.app/api/register \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"password123"}'
```

### Using Python:
```python
import requests

# Health check
response = requests.get('https://devops-backend.up.railway.app/')
print(response.json())
```

## Next Steps

Once the backend is working:

1. Test all API endpoints
2. Update frontend to use the backend URL
3. Test the full application flow
4. Monitor Railway logs for any issues

## Need More Help?

If you're still stuck:
1. Share your Railway service logs
2. Share your environment variables (without passwords)
3. Check the Railway deployment logs
4. Verify your Dockerfile is correct


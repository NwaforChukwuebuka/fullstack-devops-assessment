# Configure Your Railway Backend NOW 🚀

## You Have These Database Details:

```
Host: mainline.proxy.rlwy.net
Port: 28069
Username: root
Password: UJOkUbqupGDsnxssOUgBIvkJFdiEJkWj
Database: railway
```

## Step-by-Step Configuration (5 Minutes)

### Step 1: Open Your Backend Service in Railway

1. Go to https://railway.app
2. Open your backend service (the one deployed to `devops-backend.up.railway.app`)
3. Click on the **"Variables"** tab

### Step 2: Add Database Connection Variables

In the "Variables" section, add these variables one by one:

**Variable 1:**
```
Name: DB_CONNECTION
Value: mysql
```

**Variable 2:**
```
Name: DB_HOST
Value: mainline.proxy.rlwy.net
```

**Variable 3:**
```
Name: DB_PORT
Value: 28069
```

**Variable 4:**
```
Name: DB_DATABASE
Value: railway
```

**Variable 5:**
```
Name: DB_USERNAME
Value: root
```

**Variable 6:**
```
Name: DB_PASSWORD
Value: UJOkUbqupGDsnxssOUgBIvkJFdiEJkWj
```

**Variable 7 (Important!):**
```
Name: APP_ENV
Value: production
```

**Variable 8:**
```
Name: APP_DEBUG
Value: false
```

### Step 3: Redeploy Your Service

After adding all variables:

1. Railway should automatically redeploy
2. OR click "Deploy" button to trigger a new deployment
3. Wait for deployment to complete (check the "Deployments" tab)

### Step 4: Test Your Backend

Run this test script to verify it's working:

```bash
./test-backend.sh
```

Or test manually:

```bash
# Test database connection
curl https://devops-backend.up.railway.app/test-db

# Test health check
curl https://devops-backend.up.railway.app/
```

### Expected Results

✅ **Health Check** should return:
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

✅ **Database Test** should return:
```json
{
    "status": "connected",
    "database": "railway"
}
```

## Troubleshooting

### If deployment fails:
- Check Railway logs in the "Deployments" tab
- Verify all variables are set correctly
- Check that there are no typos in variable names/values

### If you get "database error" in response:
- Double-check DB_HOST is exactly: `mainline.proxy.rlwy.net`
- Verify DB_PORT is: `28069`
- Confirm DB_PASSWORD is correct (copy it again)

### If database is still not connected:
1. Check Railway logs for detailed error messages
2. Try running migrations manually:
   - Go to backend service
   - Click "Deployments"
   - Find latest deployment
   - Click menu (three dots)
   - Select "Execute Command"
   - Run: `php artisan migrate --force`

## Quick Verification Checklist

- [ ] All 8 variables are added to backend service
- [ ] Service is redeployed successfully
- [ ] Health check returns `database_connected: true`
- [ ] `/test-db` endpoint returns status "connected"
- [ ] No errors in Railway logs

## Once Working

After verification, you can test the full API:

```bash
# Test registration
curl -X POST https://devops-backend.up.railway.app/api/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","password":"password123"}'
```

**Expected Response:** User created successfully or validation error

## Need Help?

If still not working after these steps:
1. Check `RAILWAY_BACKEND_TROUBLESHOOTING.md` for detailed guide
2. Share Railway service logs (without passwords)
3. Verify MySQL service is running in Railway

---

**TL;DR**: Add the 8 variables above to your backend service in Railway, redeploy, and test with `./test-backend.sh`


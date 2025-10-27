# Railway Environment Variables Setup

## Database Connection Details

From your Railway MySQL service:

```
DB_HOST=mainline.proxy.rlwy.net
DB_PORT=28069
DB_USERNAME=root
DB_PASSWORD=UJOkUbqupGDsnxssOUgBIvkJFdiEJkWj
DB_DATABASE=railway
```

## Option 1: Use Railway's Automatic Variables (RECOMMENDED)

Railway automatically provides these variables to your services when you connect them to a database. You can reference them in your backend service:

1. **In Railway Dashboard:**
   - Go to your Backend service
   - Click "Variables" tab
   - Add these variables:

```bash
APP_NAME="Form Builder API"
APP_ENV=production
APP_DEBUG=false

# Database connection using Railway's automatic variables
DB_CONNECTION=mysql
DB_HOST=${{ MySQL.MYSQL_HOST }}
DB_PORT=${{ MySQL.MYSQL_PORT }}
DB_DATABASE=${{ MySQL.MYSQLDATABASE }}
DB_USERNAME=${{ MySQL.MYSQLUSER }}
DB_PASSWORD=${{ MySQL.MYSQLPASSWORD }}
```

## Option 2: Manual Configuration

If automatic variables don't work, set them manually:

```bash
APP_NAME="Form Builder API"
APP_ENV=production
APP_DEBUG=false

DB_CONNECTION=mysql
DB_HOST=mainline.proxy.rlwy.net
DB_PORT=28069
DB_USERNAME=root
DB_PASSWORD=UJOkUbqupGDsnxssOUgBIvkJFdiEJkWj
DB_DATABASE=railway
```

## Option 3: Use Full Connection URL

Some Laravel setups support using `DATABASE_URL`:

```bash
DATABASE_URL=mysql://root:UJOkUbqupGDsnxssOUgBIvkJFdiEJkWj@mainline.proxy.rlwy.net:28069/railway
```

## Steps to Configure

### 1. Connect Database to Backend Service

In Railway Dashboard:
1. Go to your **MySQL service**
2. Click "**Connect**" or look for connection options
3. Click **"Private Network"** tab (recommended, no egress costs)
4. Copy the value shown (it should reference the MySQL service like `${{ MySQL.MYSQL_URL }}`)
5. Go to your **Backend service**
6. Click **"Variables"** tab
7. Click **"New Variable"**
8. Create a variable with the value you copied
9. Railway will automatically inject all MySQL connection details

### 2. Verify Variables Are Set

Check that these variables exist in your backend service:
- `DB_CONNECTION` = `mysql`
- `DB_HOST` = (set automatically or manually)
- `DB_PORT` = (set automatically or manually)
- `DB_DATABASE` = `railway`
- `DB_USERNAME` = `root`
- `DB_PASSWORD` = (set automatically or manually)

### 3. Run Migrations

After setting up the database connection:

**In Railway Terminal (for your backend service):**
```bash
php artisan migrate --force
```

**Or trigger a new deployment** - your Dockerfile should already run migrations (line 46):
```dockerfile
RUN php artisan migrate --force || true
```

### 4. Test the Connection

After deployment, test with:

```bash
curl https://devops-backend.up.railway.app/test-db
```

Expected response:
```json
{
    "status": "connected",
    "database": "railway"
}
```

## Troubleshooting

### If you get "Access denied" error:
- Check that `DB_USERNAME` and `DB_PASSWORD` match the MySQL credentials
- Verify you're connecting from the correct IP/network

### If you get "Connection refused":
- Make sure you're using the **Private Network** connection (not Public Network)
- Verify `DB_HOST` is correct
- Check that `DB_PORT` is `28069`

### If migrations fail:
- Verify database credentials
- Check that database `railway` exists
- Try running migrations manually via Railway terminal

## Important Notes

⚠️ **Security**: Never commit database passwords to version control
⚠️ **Cost**: Use "Private Network" to avoid egress costs
⚠️ **Connection URL**: The public network connection works but costs money for traffic

## Quick Test

After configuration, run:
```bash
./test-backend.sh
```

This will test your backend and database connection.


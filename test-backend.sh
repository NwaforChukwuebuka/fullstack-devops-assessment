#!/bin/bash

echo "Testing Railway Backend..."
echo "=========================="
echo ""

BACKEND_URL="https://devops-backend.up.railway.app"

# Test 1: Health check
echo "1. Testing health check endpoint..."
HEALTH_RESPONSE=$(curl -s -w "\nHTTP_CODE:%{http_code}" "$BACKEND_URL/")
HTTP_CODE=$(echo "$HEALTH_RESPONSE" | grep "HTTP_CODE" | cut -d: -f2)
if [ "$HTTP_CODE" = "200" ]; then
    echo "   ✅ Health check passed"
    echo "   Response: $(echo "$HEALTH_RESPONSE" | grep -v HTTP_CODE)"
else
    echo "   ❌ Health check failed with status $HTTP_CODE"
fi
echo ""

# Test 2: Database connection
echo "2. Testing database connection..."
DB_RESPONSE=$(curl -s -w "\nHTTP_CODE:%{http_code}" "$BACKEND_URL/test-db")
DB_HTTP_CODE=$(echo "$DB_RESPONSE" | grep "HTTP_CODE" | cut -d: -f2)
if [ "$DB_HTTP_CODE" = "200" ]; then
    echo "   ✅ Database connection OK"
else
    echo "   ❌ Database connection failed (status $DB_HTTP_CODE)"
    echo "   This is likely why the backend isn't working!"
fi
echo ""

# Test 3: API registration endpoint
echo "3. Testing API registration endpoint..."
API_RESPONSE=$(curl -s -w "\nHTTP_CODE:%{http_code}" \
    -X POST "$BACKEND_URL/api/register" \
    -H "Content-Type: application/json" \
    -d '{"name":"Test User","email":"test@example.com","password":"password123"}')
API_HTTP_CODE=$(echo "$API_RESPONSE" | grep "HTTP_CODE" | cut -d: -f2)

if [ "$API_HTTP_CODE" = "200" ] || [ "$API_HTTP_CODE" = "201" ] || [ "$API_HTTP_CODE" = "422" ]; then
    echo "   ✅ API endpoint is responding"
elif [ "$API_HTTP_CODE" = "500" ]; then
    echo "   ❌ API endpoint returns 500 (database issue)"
else
    echo "   ⚠️  API returned status $API_HTTP_CODE"
fi
echo ""

echo "=========================="
echo "Summary:"
echo ""
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ Backend is accessible"
else
    echo "❌ Backend is NOT working properly"
fi

if [ "$DB_HTTP_CODE" = "200" ]; then
    echo "✅ Database is connected"
else
    echo "❌ Database is NOT connected (THIS IS THE PROBLEM)"
fi

echo ""
echo "Next steps:"
echo "1. Check Railway dashboard for database service"
echo "2. Verify environment variables are set correctly"
echo "3. Check Railway logs for detailed error messages"
echo "4. See RAILWAY_BACKEND_TROUBLESHOOTING.md for detailed guide"


#!/bin/bash

echo "🚀 Form Builder Application"
echo "==========================="
echo ""

# Check if frontend directory exists
if [ ! -d "frontend" ]; then
    echo "❌ Frontend directory not found!"
    exit 1
fi

echo "✅ Starting Frontend Development Server..."
echo ""
echo "📱 Frontend will be available at: http://localhost:5173"
echo "⚠️  Note: Backend API needs to be set up separately for full functionality"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd frontend
npm run dev


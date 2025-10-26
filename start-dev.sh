#!/bin/bash
# Development start script

echo "Starting Form Builder Development Environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Start all services
echo "Starting Docker containers..."
docker-compose up -d

# Wait for services to be ready
echo "Waiting for services to be ready..."
sleep 10

# Check if containers are running
if docker-compose ps | grep -q "Up"; then
    echo "Services are running!"
    echo ""
    echo "Access the application at:"
    echo "Frontend: http://localhost"
    echo "Backend: http://localhost:8000"
    echo ""
    echo "To view logs: docker-compose logs -f"
    echo "To stop: docker-compose down"
else
    echo "Failed to start services. Check logs with: docker-compose logs"
fi


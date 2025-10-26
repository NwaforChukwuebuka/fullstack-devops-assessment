# Multi-stage build for React app
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy application code
COPY . .

# Build the app
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Install gettext for envsubst (to substitute environment variables)
RUN apk add --no-cache gettext

WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy built assets from build stage
COPY --from=build /app/dist .

# Copy Nginx configuration template
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose port from Railway
EXPOSE $PORT

# Start Nginx (envsubst will replace $PORT in template)
CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]


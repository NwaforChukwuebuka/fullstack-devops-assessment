# PHP Dockerfile for Laravel
FROM php:8.2-cli

# Set working directory
WORKDIR /app

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy composer files first for dependency installation
COPY composer.json composer.lock* ./

# Install dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction || true

# Copy application files
COPY . .

# Dump autoload to ensure all classes are registered
RUN composer dump-autoload --optimize

# Ensure required directories exist and set permissions
RUN mkdir -p storage/framework/{cache,sessions,views} storage/logs bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Generate app key
RUN php artisan key:generate --ansi --force || true

# Expose port
EXPOSE $PORT

# Start Laravel development server
CMD php artisan serve --host=0.0.0.0 --port=$PORT


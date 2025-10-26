# For Laravel
composer create-project laravel/laravel backend "^10.0"

cd backend

# Install Sanctum
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Configure environment
cp .env.example .env
php artisan key:generate

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=form_builder
DB_USERNAME=root
DB_PASSWORD=

# Run migrations
php artisan migrate


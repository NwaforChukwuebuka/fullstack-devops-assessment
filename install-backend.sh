#!/bin/sh

set -e

echo "Laravel installation..."

# Download and install Composer
if ! command -v composer &> /dev/null; then
    echo "Installing Composer..."
    curl -sS https://getcomposer.org/installer | php
    mv composer.phar /usr/local/bin/composer
    chmod +x /usr/local/bin/composer
fi

cd /home/ebukz/projects/fullstack-devops-assessment

# Create Laravel project
composer create-project laravel/laravel backend "^10.0" --prefer-dist

echo "Laravel installation complete!"


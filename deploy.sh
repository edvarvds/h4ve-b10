#!/bin/bash

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "Heroku CLI is not installed. Please install it to deploy to Heroku."
    echo "Visit: https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

# Check if user is logged in to Heroku
if ! heroku auth:whoami &> /dev/null; then
    echo "You are not logged in to Heroku. Please login first."
    heroku login
fi

# Ask for app name
read -p "Enter your Heroku app name (leave blank to create a new app): " app_name

if [ -z "$app_name" ]; then
    echo "Creating a new Heroku app..."
    heroku create
    app_name=$(heroku apps:info --json | grep -o '"app_name":"[^"]*' | cut -d'"' -f4)
    echo "Created app: $app_name"
else
    # Check if app exists
    if ! heroku apps:info --app "$app_name" &> /dev/null; then
        echo "App $app_name does not exist. Creating it..."
        heroku create "$app_name"
    fi
fi

# Ask which deployment method to use
echo "Which deployment method would you like to use?"
echo "1) PHP (recommended for handling special characters)"
echo "2) Node.js"
read -p "Enter your choice (1 or 2): " deployment_method

# Update Procfile based on choice
if [ "$deployment_method" = "1" ]; then
    echo "Using PHP deployment method..."
    echo "web: vendor/bin/heroku-php-apache2 ./" > Procfile
    echo "Procfile updated for PHP deployment."
else
    echo "Using Node.js deployment method..."
    echo "web: node server.js" > Procfile
    echo "Procfile updated for Node.js deployment."
fi

# Commit changes
git add .
git commit -m "Prepare for Heroku deployment"

# Push to Heroku
echo "Deploying to Heroku..."
git push heroku main

# Open the app
echo "Deployment complete! Opening the app..."
heroku open --app "$app_name"

# Show logs
echo "Showing logs (press Ctrl+C to exit)..."
heroku logs --tail --app "$app_name" 
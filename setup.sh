#!/bin/bash

# Initialize npm project
echo "Initializing project..."
npm install

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
    echo "Heroku CLI is not installed. Please install it to deploy to Heroku."
    echo "Visit: https://devcenter.heroku.com/articles/heroku-cli"
    exit 1
fi

echo "Setup complete! You can now run 'npm start' to start the server locally."
echo "To deploy to Heroku, follow the instructions in the README.md file." 
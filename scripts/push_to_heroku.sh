#!/bin/bash

# Log in to the Heroku Docker CLI
echo "$HEROKU_PASSWORD" | docker login -u "$HEROKU_ID" --password-stdin registry.heroku.com

# Tag the pushed Docker image for Heroku
docker tag "$DOCKER_ID"/landing-pages-client registry.heroku.com/landing-pages-client/web

# Push to Heroku
docker push registry.heroku.com/landing-pages-client/web

# Release container within Heroku
heroku container:release web --app landing-pages-client

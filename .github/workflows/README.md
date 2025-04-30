# GitHub Actions Deployment Workflow

This repository contains GitHub Actions workflows to automatically deploy your project to your self-hosted server.

## Deployment Workflow

The deployment workflow (`deploy.yml`) will:

1. Trigger on pushes to the `main` branch or manual workflow dispatch
2. SSH into your server
3. Pull the latest code from Git
4. Rebuild and restart the Docker container using docker-compose

## Required Secrets

Before the workflow can run successfully, you need to add the following secrets to your GitHub repository:

1. `SSH_PRIVATE_KEY`: The private SSH key to authenticate with your server
2. `SERVER_IP`: The IP address or hostname of your server
3. `SERVER_USER`: The SSH username to log in to your server

### How to Set Up Secrets

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add each of the required secrets

### Generating an SSH Key for Deployment

If you don't have an SSH key set up for automated deployment:

```bash
# Generate a new SSH key (without passphrase for automation)
ssh-keygen -t rsa -b 4096 -f ~/.ssh/github_deploy_key -N ""

# Display the public key to add to your server's authorized_keys
cat ~/.ssh/github_deploy_key.pub

# Display the private key to add as a GitHub secret
cat ~/.ssh/github_deploy_key
```

Add the public key to your server's `~/.ssh/authorized_keys` file, and add the private key as the `SSH_PRIVATE_KEY` secret in GitHub.

## Server Requirements

Your server should have:

- Git installed and configured
- Docker and Docker Compose installed
- A directory at `/home/fuwari` with a cloned copy of this repository
- Proper permissions for the deploy user to run Docker commands

# Deployment Guide

## GitHub Pages Deployment

This project uses GitHub Actions to automatically deploy to GitHub Pages when changes are pushed to the `portfolio` branch.

### Workflow Configuration

The deployment workflow is located at `.github/workflows/deploy.yml` and includes:

- **Trigger**: Automatically runs on pushes to the `portfolio` branch
- **Build**: Uses pnpm to install dependencies and build the project
- **Deploy**: Automatically deploys to GitHub Pages

### Environment Variables

The workflow reads environment variables from the `.env` file:
- `VITE_BASE_URL=/hectorrosario22/` - Base URL for GitHub Pages

**Note**: The environment variables are read from the `.env` file in the repository.

### Node.js Version

The workflow uses the Node.js version specified in the `.node-version` file (currently Node.js 22).

### Manual Deployment

You can also trigger the deployment manually:
1. Go to the "Actions" tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the `portfolio` branch

### GitHub Pages Settings

Make sure your repository has GitHub Pages enabled:
1. Go to repository Settings > Pages
2. Source should be set to "GitHub Actions"

### Local Development

For local development, you can create a `.env` file with:
```
VITE_BASE_URL=/
```

This will allow the app to run locally without the GitHub Pages base path.

### Environment Variables

The `VITE_BASE_URL` environment variable is configured in the `.env` file:
```
VITE_BASE_URL=/hectorrosario22/
```

This ensures the same configuration is used for both local development and deployment. 
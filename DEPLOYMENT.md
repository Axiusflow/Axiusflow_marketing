# Landing Deployment

The landing page is deployed as a Docker image to GHCR:

`ghcr.io/axiusflow/axiusflow-landing:production`

GitHub Actions builds the image on pushes to `main` and deploys it to `/srv/axiusflow/runtime` on the production server.

Production routing:

- `axiusflow.com` -> landing container
- `www.axiusflow.com` -> redirect to `axiusflow.com`
- `app.axiusflow.com` -> product app
- `api.axiusflow.com` -> backend API

Required GitHub secrets:

- `PROD_HOST`
- `PROD_USER`
- `PROD_SSH_KEY`
- `GHCR_READ_TOKEN`

Use the GitHub `production` environment with required reviewers if deployments need manual approval.

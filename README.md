# check-entra-id-sp-expiration

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/L480/check-entra-id-sp-expiration/check-sp-expiration.yml?label=Secret%20Expiration%20Check)

Checks for expiring Entra ID service principal secrets.

The GitHub action fails if secrets are found that are about to expire (by default within the next [60 days](.github/workflows/check-sp-expiration.yml#L34)).

## Setup

1. Create a new repository from this template.
2. Create an Entra ID service principal with `Application.Read.All` Graph API permissions.
3. Create Entra ID federated credentials for your service principal and use the "GitHub Actions deploying Azure resources" scenario.
4. Add `AZURE_CLIENT_ID` and `AZURE_TENANT_ID` as repository secrets.

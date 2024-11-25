# check-entra-id-sp-expiration

Checks for expiring Entra ID service principal secrets.

## Setup

1. Create a new repository from this template.
2. Create an Entra ID service principal with `Application.Read.All` Graph API permissions.
3. Create Entra ID federated credentials for your service principal and use the "GitHub Actions deploying Azure resources" scenario.
4. Add `AZURE_CLIENT_ID` and `AZURE_TENANT_ID` as repository secret.
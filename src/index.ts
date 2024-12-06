import { AzureCliCredential } from '@azure/identity'
import { Client } from '@microsoft/microsoft-graph-client'
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials'

(async () => {
    const daysUntilExpiration = Number(process.env.DAYS_UNTIL_EXPIRATION || '60')
    const credential = new AzureCliCredential()

    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
        scopes: ['https://graph.microsoft.com/.default'],
    })

    const graphClient = Client.initWithMiddleware({ authProvider: authProvider })

    const apps: Application[] = (await graphClient.api('/applications').select('appId,displayName,passwordCredentials').get()).value
    const today = new Date
    let exitWithFailure = false
    for (let app of apps) {
        if (app.passwordCredentials) {
            for (let credential of app.passwordCredentials) {
                const expDate = new Date(credential.endDateTime)
                const timeDiff = expDate.getTime() - today.getTime()
                const daysDiff = Math.round(timeDiff / (1000 * 3600 * 24))
                if (daysDiff < daysUntilExpiration) {
                    console.error(`⚠️ Secret '${credential.displayName}' for service principal '${app.displayName}' expires in ${daysDiff} days.`)
                    exitWithFailure = true
                }
            }
        }
    }

    if (exitWithFailure) {
        process.exit(1)
    } else {
        console.log(`✅ There are no service principal secrets expiring in the next ${daysUntilExpiration} days.`)
    }
})()

type Application = {
  appId: string
  displayName: string
  passwordCredentials: Array<{
    customKeyIdentifier: any
    displayName: string
    endDateTime: string
    hint: string
    keyId: string
    secretText: any
    startDateTime: string
  }>
}
export interface Application {
  appId: string
  displayName: string
  passwordCredentials: PasswordCredential[]
}

export interface PasswordCredential {
  customKeyIdentifier: any
  displayName: string
  endDateTime: string
  hint: string
  keyId: string
  secretText: any
  startDateTime: string
}

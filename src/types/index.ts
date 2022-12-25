export type HostName = string

export type App = {
    apdex: number
    name: string
    contributors?: string[]
    host: HostName[]
    version?: number
}

export type AllHostsList = [HostName, App[]]

export interface ProviderBluprint {
    getTopApps(): AllHostsList[]
    getTopAppsByHost(hostName: HostName, amount: number): App[]
    removeAppFromHosts(app: App): void
}

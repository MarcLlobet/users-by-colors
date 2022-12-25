import { HostName, App, ProviderBluprint, AllHostsList } from '../types/index'

import { hasKeysLeft } from '../helpers/custom'

type AppsByHostMap = {
    [host: HostName]: {
        [apdex: string]: {
            [appName: string]: App
        }
    }
}

class AppsByHost implements ProviderBluprint {
    rawData: App[]
    hosts: AppsByHostMap

    constructor(data: App[]) {
        this.rawData = data
        this.hosts = {}

        this.traverseFromHostByApps(data)
    }

    traverseFromHostByApps(data: App[]): void {
        data.forEach((app) => {
            app.host.forEach((hostName) => {
                this.addAppByHost(hostName, app)
            })
        })
    }

    addAppByHost(hostName: HostName, app: App): void {
        if (!this.hosts[hostName]) {
            this.hosts[hostName] = { [app.apdex]: { [app.name]: app } }
        } else if (!this.hosts[hostName][app.apdex]) {
            this.hosts[hostName][app.apdex] = { [app.name]: app }
        }
        this.hosts[hostName][app.apdex][app.name] = app
    }

    getTopAppsByHost(hostName: HostName, amount: number = 5): App[] {
        const topApps = []
        let highestApdex = 100
        while (topApps.length < amount) {
            for (let appName in this.hosts[hostName][highestApdex]) {
                topApps.push(this.hosts[hostName][highestApdex][appName])
                if (topApps.length === amount) break
            }
            --highestApdex
            if (highestApdex === 0) break
        }

        return topApps
    }

    getTopApps(): AllHostsList[] {
        return Object.keys(this.hosts).map((hostName) => [
            hostName,
            this.getTopAppsByHost(hostName),
        ])
    }

    addAppToHosts(app: App): void {
        app.host.forEach((hostName) => {
            this.addAppByHost(hostName, app)
        })
    }

    private removeAppFromHost(hostName: HostName, app: App): void {
        delete this.hosts[hostName][app.apdex][app.name]

        if (!hasKeysLeft(this.hosts[hostName][app.apdex])) {
            delete this.hosts[hostName][app.apdex]

            if (!hasKeysLeft(this.hosts[hostName])) {
                delete this.hosts[hostName]
            }
        }
    }

    removeAppFromHosts(app: App): void {
        app.host.forEach((hostName) => {
            this.removeAppFromHost(hostName, app)
        })
    }
}

export default AppsByHost

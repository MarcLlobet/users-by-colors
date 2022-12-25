import { HostName, App, AllHostsList, ProviderBluprint } from '../types/index'

import { BynarySearchTree } from '../helpers/bst-tree'
/**
 * const TOP_APPS_AMOUNT
 * By changing this number,
 * you can see the first n apps by host.
 */
const TOP_APPS_AMOUNT = 5

export type HostsTree = {
    [key: HostName]: any
}

export class Store {
    protected data: App[]
    constructor(protected rawData: App[]) {
        this.data = Store.sortByApdex(this.rawData)
    }

    static sortByApdex(unsortedData: App[]): App[] {
        const dataCopy = [...unsortedData]
        return dataCopy.sort((a, b) => b.apdex - a.apdex)
    }

    getRawData() {
        return this.rawData
    }

    getData() {
        return this.data
    }
}

class AppStore extends Store implements ProviderBluprint {
    protected appsByHost: HostsTree = {}

    constructor(data: App[]) {
        super(data)
        this.createAppsTreeByHost(data)
    }

    createAppsTreeByHost(apps: App[]): void {
        apps.forEach((app: App) => this.addAppToHosts(app))
    }

    addAppToHosts(app: App): void {
        app.host.forEach((hostName) => {
            if (!this.appsByHost[hostName]) {
                this.appsByHost[hostName] = new BynarySearchTree()
            }
            this.appsByHost[hostName].addNode(app)
        })
    }

    getTopApps(): AllHostsList[] {
        return Object.keys(this.appsByHost).map((hostName) => [
            hostName,
            this.getTopAppsByHost(hostName),
        ])
    }

    getTopAppsByHost(
        hostName: HostName,
        amount: number = TOP_APPS_AMOUNT
    ): App[] {
        return this.appsByHost[hostName]?.getNodes(amount)
    }

    removeAppFromHosts(app: App): void {
        app.host.forEach((hostName) => {
            this.appsByHost[hostName].removeNode(app)
        })
    }
}

export default AppStore

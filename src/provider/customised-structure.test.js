import CustomisedStructure from './customised-structure'

describe('CustomisedStructure', () => {
    const mockApps = [
        { name: 'app1', host: ['host1'], apdex: 3 },
        { name: 'app2', host: ['host2'], apdex: 5 },
        { name: 'app3', host: ['host3'], apdex: 10 },
        { name: 'app4', host: ['host4'], apdex: 1 },
        { name: 'app5', host: ['host5'], apdex: 2 },
    ]

    it('adds structured data', () => {
        const store = new CustomisedStructure(mockApps)
        const [app1] = mockApps
        const [host1App1] = app1.host
        const storedApp = store.hosts[host1App1][app1.apdex][app1.name]

        expect(storedApp).toEqual(app1)
    })

    it('getTopAppsByHost', () => {
        const store = new CustomisedStructure(mockApps)
        const [app1] = mockApps
        const [host1App1] = app1.host
        const storedApp = store.getTopAppsByHost(host1App1)

        expect(storedApp).toEqual([app1])
    })

    it('getTopApps', () => {
        const store = new CustomisedStructure(mockApps)
        const expectedResult = mockApps.map((app) => [app.host[0], [app]])

        expect(store.getTopApps()).toEqual(expectedResult)
    })

    it('addAppToHosts', () => {
        const [app1, ...restMockApps] = mockApps
        const store = new CustomisedStructure(restMockApps)
        store.addAppToHosts(app1)

        const [host1App1] = app1.host
        const storedApp = store.hosts[host1App1][app1.apdex][app1.name]

        expect(storedApp).toEqual(app1)
    })

    it('removeAppFromHosts', () => {
        const [app1] = mockApps
        const store = new CustomisedStructure(mockApps)
        store.removeAppFromHosts(app1)

        const [host1App1] = app1.host
        const storedApp = store.hosts[host1App1]?.[app1.apdex]?.[app1.name]

        expect(storedApp).toBe(undefined)
    })

    it('should return getTopApps without the removed app', () => {
        const [app1, ...restMockApps] = mockApps
        const store = new CustomisedStructure(mockApps)
        store.removeAppFromHosts(app1)

        const expectedResult = restMockApps.map((app) => [app.host[0], [app]])

        expect(store.getTopApps()).toEqual(expectedResult)
    })
})

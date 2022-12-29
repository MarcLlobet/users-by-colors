import hostAppData from '../../host-app-data.json'
import CustomisedStructure from './customised-structure'

describe('CustomisedStructure', () => {
    it('adds structured data', () => {
        const store = new CustomisedStructure(hostAppData)
        const [app1] = hostAppData
        const [host1App1] = app1.host
        const storedApp = store.hosts[host1App1][app1.apdex][app1.name]

        expect(storedApp).toEqual(app1)
    })

    it('getTopAppsByHost', () => {
        const store = new CustomisedStructure(hostAppData)
        const [app1] = hostAppData
        const [host1App1] = app1.host
        const storedApp = store.getTopAppsByHost(host1App1)

        expect(storedApp).toEqual([
            {
                apdex: 100,
                contributors: [
                    'Karson Marquardt III',
                    'Lydia Lind',
                    'Abel Ratke',
                    'Aaron Nicolas',
                    'Martin Weber',
                ],
                host: [
                    '92116865-5462.conor.com',
                    '7e6272f7-098e.dakota.biz',
                    '128406fc-0d3f.tiana.biz',
                    'e7bf58af-f0be.dallas.biz',
                ],
                name: 'Awesome Wooden Sausages - Schaefer - Hegmann, Inc',
                version: 7,
            },
            {
                apdex: 99,
                contributors: [
                    'Ms. Steve Pagac',
                    'Elias Bradtke',
                    'Devan Cummings',
                    'Jennifer Barton',
                    'Tania Cremin',
                ],
                host: [
                    '7e6272f7-098e.dakota.biz',
                    '2b4cfcf7-81d5.kelli.org',
                    'b0b655c5-928a.nadia.biz',
                    '92116865-5462.conor.com',
                ],
                name: 'Small Concrete Computer - Kiehn, Armstrong and Walker, and Sons',
                version: 3,
            },
            {
                apdex: 99,
                contributors: ['Mr. Jarvis Hammes', 'Rey Reichert'],
                host: [
                    'e0419f48-6a5a.craig.info',
                    '9a450527-cdd9.kareem.info',
                    '7e6272f7-098e.dakota.biz',
                    '95b346a0-17f4.abbigail.name',
                    'e7bf58af-f0be.dallas.biz',
                ],
                name: 'Practical Fresh Chips - Weber - Lemke, Inc',
                version: 4,
            },
            {
                apdex: 99,
                contributors: [
                    'Madisyn Lesch',
                    'Beryl Howell',
                    'Leone Weimann',
                    'Delaney Mante DVM',
                ],
                host: [
                    '7e6272f7-098e.dakota.biz',
                    'e0419f48-6a5a.craig.info',
                    '128406fc-0d3f.tiana.biz',
                    '92116865-5462.conor.com',
                    '95b346a0-17f4.abbigail.name',
                ],
                name: 'Small Rubber Sausages - Kutch LLC, and Sons',
                version: 2,
            },
            {
                apdex: 97,
                contributors: [
                    'Martine Bogan',
                    'Reyna Schneider',
                    'Jayce Bartoletti',
                    'Murray Frami',
                ],
                host: [
                    '7e6272f7-098e.dakota.biz',
                    'b0b655c5-928a.nadia.biz',
                    '1d717554-bf17.sydnie.name',
                ],
                name: 'Sleek Granite Chips - Labadie Inc, LLC',
                version: 7,
            },
        ])
    })

    it('getTopApps', () => {
        const store = new CustomisedStructure(hostAppData)
        const expectedResult = store.getTopApps().map(([appName]) => appName)

        expect(expectedResult).toEqual([
            '7e6272f7-098e.dakota.biz',
            '9a450527-cdd9.kareem.info',
            'e7bf58af-f0be.dallas.biz',
            'e0419f48-6a5a.craig.info',
            'b0b655c5-928a.nadia.biz',
            '95b346a0-17f4.abbigail.name',
            '128406fc-0d3f.tiana.biz',
            '2b4cfcf7-81d5.kelli.org',
            '92116865-5462.conor.com',
            '1d717554-bf17.sydnie.name',
        ])
    })

    it('addAppToHosts', () => {
        const [app1, ...resthostAppData] = hostAppData
        const store = new CustomisedStructure(resthostAppData)
        store.addAppToHosts(app1)

        const [host1App1] = app1.host
        const storedApp = store.hosts[host1App1][app1.apdex][app1.name]

        expect(storedApp).toEqual(app1)
    })

    it('removeAppFromHosts', () => {
        const [app1] = hostAppData
        const store = new CustomisedStructure(hostAppData)
        store.removeAppFromHosts(app1)

        const [host1App1] = app1.host
        const storedApp = store.hosts[host1App1]?.[app1.apdex]?.[app1.name]

        expect(storedApp).toBe(undefined)
    })

    it('should return getTopApps without the removed app', () => {
        const store = new CustomisedStructure(hostAppData)
        const topApps = store.getTopApps()
        const [firstHost] = topApps
        const [, firstTopApps] = firstHost
        const [firstTopApp] = firstTopApps
        store.removeAppFromHosts(firstTopApp)

        const topAppsAfterRemoval = store.getTopApps()
        const [firstHostAfterRemoval] = topAppsAfterRemoval
        const [, firstTopAppsAfterRemoval] = firstHostAfterRemoval
        const [firstTopAppAfterRemoval] = firstTopAppsAfterRemoval
        expect(firstTopAppAfterRemoval).not.toEqual(firstTopApp)
    })
})

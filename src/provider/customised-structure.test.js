import CustomisedStructure from './customised-structure'

describe('CustomisedStructure', () => {
    const mockUsers = [
        { name: 'user1', colors: ['color1'], rank: 3 },
        { name: 'user2', colors: ['color2'], rank: 5 },
        { name: 'user3', colors: ['color3'], rank: 10 },
        { name: 'user4', colors: ['color4'], rank: 1 },
        { name: 'user5', colors: ['color5'], rank: 2 },
    ]

    it('adds structured data', () => {
        const store = new CustomisedStructure(mockUsers)
        const [user1] = mockUsers
        const [color1User1] = user1.colors
        const storedUser = store.colors[color1User1][user1.rank][user1.name]

        expect(storedUser).toEqual(user1)
    })

    it('getTopUsersByColor', () => {
        const store = new CustomisedStructure(mockUsers)
        const [user1] = mockUsers
        const [color1User1] = user1.colors
        const storedUser = store.getTopUsersByColor(color1User1)

        expect(storedUser).toEqual([user1])
    })

    it('getTopUsers', () => {
        const store = new CustomisedStructure(mockUsers)
        const expectedResult = mockUsers.map((user) => [user.colors[0], [user]])

        expect(store.getTopUsers()).toEqual(expectedResult)
    })

    it('addUserToColors', () => {
        const [user1, ...restMockUsers] = mockUsers
        const store = new CustomisedStructure(restMockUsers)
        store.addUserToColors(user1)

        const [color1User1] = user1.colors
        const storedUser = store.colors[color1User1][user1.rank][user1.name]

        expect(storedUser).toEqual(user1)
    })

    it('removeUserFromColors', () => {
        const [user1] = mockUsers
        const store = new CustomisedStructure(mockUsers)
        store.removeUserFromColors(user1)

        const [color1User1] = user1.colors
        const storedUser = store.colors[color1User1]?.[user1.rank]?.[user1.name]

        expect(storedUser).toBe(undefined)
    })

    it('should return getTopUsers without the removed user', () => {
        const [user1, ...restMockUsers] = mockUsers
        const store = new CustomisedStructure(mockUsers)
        store.removeUserFromColors(user1)

        const expectedResult = restMockUsers.map((user) => [user.colors[0], [user]])

        expect(store.getTopUsers()).toEqual(expectedResult)
    })
})

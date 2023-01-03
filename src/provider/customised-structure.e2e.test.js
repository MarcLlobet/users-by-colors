import userColorsData from '../../user-colors-data.json'
import CustomisedStructure from './customised-structure'

describe('CustomisedStructure', () => {
    it('adds structured data', () => {
        const store = new CustomisedStructure(userColorsData)
        const [user1] = userColorsData
        const [color1User1] = user1.colors
        const storedUser = store.colors[color1User1][user1.rank][user1.name]

        expect(storedUser).toEqual(user1)
    })

    it('getTopUsersByColor', () => {
        const store = new CustomisedStructure(userColorsData)
        const [user1] = userColorsData
        const [color1User1] = user1.colors
        const storedUser = store.getTopUsersByColor(color1User1)

        expect(storedUser).toEqual([{"colors": ["violet", "red", "green", "orange", "indigo"], "name": "Jerome Zamora", "rank": 100}, {"colors": ["green", "orange", "yellow", "violet", "indigo", "red"], "name": "Elliott Price", "rank": 99}, {"colors": ["indigo", "orange", "yellow", "red"], "name": "Lael Sharp", "rank": 99}, {"colors": ["green", "yellow", "red", "indigo"], "name": "Lani Joyce", "rank": 98}, {"colors": ["green", "orange", "blue", "indigo", "red", "violet", "yellow"], "name": "Odessa Bowman", "rank": 98}])
    })

    it('getTopUsers', () => {
        const store = new CustomisedStructure(userColorsData)
        const expectedResult = store.getTopUsers().map(([userName]) => userName)

        expect(expectedResult).toEqual(["indigo", "violet", "orange", "red", "yellow", "blue", "green"])
    })

    it('addUserToColors', () => {
        const [user1, ...restuserColorsData] = userColorsData
        const store = new CustomisedStructure(restuserColorsData)
        store.addUserToColors(user1)

        const [color1User1] = user1.colors
        const storedUser = store.colors[color1User1][user1.rank][user1.name]

        expect(storedUser).toEqual(user1)
    })

    it('removeUserFromColors', () => {
        const [user1] = userColorsData
        const store = new CustomisedStructure(userColorsData)
        store.removeUserFromColors(user1)

        const [color1User1] = user1.colors
        const storedUser = store.colors[color1User1]?.[user1.rank]?.[user1.name]

        expect(storedUser).toBe(undefined)
    })

    it('should return getTopUsers without the removed user', () => {
        const store = new CustomisedStructure(userColorsData)
        const topUsers = store.getTopUsers()
        const [firstColor] = topUsers
        const [, firstTopUsers] = firstColor
        const [firstTopUser] = firstTopUsers
        store.removeUserFromColors(firstTopUser)

        const topUsersAfterRemoval = store.getTopUsers()
        const [firstColorAfterRemoval] = topUsersAfterRemoval
        const [, firstTopUsersAfterRemoval] = firstColorAfterRemoval
        const [firstTopUserAfterRemoval] = firstTopUsersAfterRemoval
        expect(firstTopUserAfterRemoval).not.toEqual(firstTopUser)
    })
})

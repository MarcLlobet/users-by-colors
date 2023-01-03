import { User, Color, ProviderBluprint, AllColorsList } from '../types/index'

import { hasKeysLeft } from '../helpers/custom'

type UsersByColorMap = {
    [color: Color]: {
        [rank: string]: {
            [userName: string]: User
        }
    }
}

class UsersByColor implements ProviderBluprint {
    rawData: User[]
    colors: UsersByColorMap

    constructor(data: User[]) {
        this.rawData = data
        this.colors = {}

        this.traverseFromColorByUsers(data)
    }

    traverseFromColorByUsers(data: User[]): void {
        data.forEach((user) => {
            user.colors.forEach((color) => {
                this.addUserByColor(color, user)
            })
        })
    }

    addUserByColor(color: Color, user: User): void {
        if (!this.colors[color]) {
            this.colors[color] = { [user.rank]: { [user.name]: user } }
        } else if (!this.colors[color][user.rank]) {
            this.colors[color][user.rank] = { [user.name]: user }
        }
        this.colors[color][user.rank][user.name] = user
    }

    getTopUsersByColor(color: Color, amount: number = 5): User[] {
        const topUsers = []
        let highestRank = 100
        while (topUsers.length < amount) {
            for (let colorName in this.colors[color][highestRank]) {
                topUsers.push(this.colors[color][highestRank][colorName])
                if (topUsers.length === amount) break
            }
            --highestRank
            if (highestRank === 0) break
        }

        return topUsers
    }

    getTopUsers(): AllColorsList[] {
        return Object.keys(this.colors).map((colorsName) => [
            colorsName,
            this.getTopUsersByColor(colorsName),
        ])
    }

    addUserToColors(user: User): void {
        user.colors.forEach((colorName) => {
            this.addUserByColor(colorName, user)
        })
    }

    private removeUserFromColor(colorName: Color, user: User): void {
        delete this.colors[colorName][user.rank][user.name]

        if (!hasKeysLeft(this.colors[colorName][user.rank])) {
            delete this.colors[colorName][user.rank]

            if (!hasKeysLeft(this.colors[colorName])) {
                delete this.colors[colorName]
            }
        }
    }

    removeUserFromColors(user: User): void {
        user.colors.forEach((colorName) => {
            this.removeUserFromColor(colorName, user)
        })
    }
}

export default UsersByColor

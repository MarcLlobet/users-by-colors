export type Color = string

export type User = {
    rank: number
    name: string
    colors: Color[]
}

export type AllColorsList = [Color, User[]]

export interface ProviderBluprint {
    getTopUsers(): AllColorsList[]
    getTopUsersByColor(color: Color, amount: number): User[]
    removeUserFromColors(user: User): void
}

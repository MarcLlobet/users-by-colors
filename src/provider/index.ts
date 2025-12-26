import { User } from '../types/index'
import CustomisedStructure from './customised-structure'
import { getUserColorsData } from '../service'

export async function getProvider(): Promise<CustomisedStructure> {
    const data: User[] = await getUserColorsData()
    return new CustomisedStructure(data)
}

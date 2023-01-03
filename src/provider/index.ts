import { User } from '../types/index'
import CustomisedStructure from './customised-structure'
import { getUserColorsData } from '../service'

const data: User[] = await getUserColorsData()

const Provider = new CustomisedStructure(data)

export default Provider

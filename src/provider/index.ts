import { App } from '../types/index'
import CustomisedStructure from './customised-structure'
import { getHostAppData } from '../service'

const data: App[] = await getHostAppData()

const Provider = new CustomisedStructure(data)

export default Provider

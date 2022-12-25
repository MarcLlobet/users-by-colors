import { App } from '../types/index'
import CustomisedStructure from './customised-structure'
import BSTStructure from './bst-structure'
import { getHostAppData } from '../service'

const data: App[] = await getHostAppData()

const providerOptions = {
    CUSTOM: 'CUSTOM',
    BST: 'BST',
}

const providersMap = {
    [providerOptions.CUSTOM]: CustomisedStructure,
    [providerOptions.BST]: BSTStructure,
}

// @ts-ignore
const providerTypeEnv = PROVIDER_TYPE // Defined in webpack
const providerType =
    providerTypeEnv === providerOptions.BST
        ? providerOptions.BST
        : providerOptions.CUSTOM
const providerClass = providersMap[providerType]

const Provider = new providerClass(data)

export default Provider

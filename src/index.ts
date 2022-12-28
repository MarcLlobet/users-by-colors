import Provider from './provider/index'
import { getApp } from './app/index'

const allTopApps = Provider.getTopApps()
const pageWrapper = getApp({ allTopApps })

const root = document.getElementById('root')
root.appendChild(pageWrapper)

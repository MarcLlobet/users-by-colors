import Provider from './provider/index'
import { getUser } from './app/index'

const allTopUsers = Provider.getTopUsers()
const pageWrapper = getUser({ allTopUsers })

const root = document.getElementById('root')
root.appendChild(pageWrapper)

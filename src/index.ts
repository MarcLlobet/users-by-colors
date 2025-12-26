import { getProvider } from './provider/index'
import { getUser } from './app/index'

async function main() {
    const Provider = await getProvider()
    const allTopUsers = Provider.getTopUsers()
    const pageWrapper = getUser({ allTopUsers })
    const root = document.getElementById('root')
    root.appendChild(pageWrapper)
}

main()

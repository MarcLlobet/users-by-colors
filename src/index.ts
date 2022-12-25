import Provider from './provider/index'
import { getPageWrapper } from './components/page-wrapper/index'
import './index.css'
import 'helvatica-neue-lt/index.css'

const allTopApps = Provider.getTopApps()
const pageWrapper = getPageWrapper({ allTopApps })

const root = document.getElementById('root')
root.appendChild(pageWrapper)

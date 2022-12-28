import './global'
import { getDOM } from '../helpers/dom-helper'
import { getGrid } from '../components/grid'
import { getHeader } from '../components/header'
import { getToggle } from '../components/toggle'
import { getPageWrapper } from '../components/page-wrapper'
import darkTheme from '../components/dark-theme'
import { AllHostsList } from '../types'

type getAppProps = {
    allTopApps: AllHostsList[]
}

const SHOW_AS = {
    BASE: 'Show as',
    GRID: 'an awesome grid',
    LIST: 'list'
}

const toggleLabels : [string, string] = [
    `${SHOW_AS.BASE} ${SHOW_AS.GRID}`,
    `${SHOW_AS.BASE} ${SHOW_AS.LIST}`
]

const title = 'Apps by Host'
const author = 'by Marc Llobet'

export const getApp = ({
    allTopApps,
}: getAppProps): HTMLElement => {
    const grid = getGrid(allTopApps)

    const onToggleHandle = (): void => {
        grid.classList.toggle('grid--list')
    }
    const headerToggle = getToggle({ onToggleHandle, toggleLabels })

    const header = getHeader({
        title,
        author,
        headerSideComponent: headerToggle,
    })

    const page = getPageWrapper({
        children: [header, grid],
    })

    document.body.prepend(darkTheme)

    return page
}

import './global'
import { getGrid } from '../components/grid'
import { getHeader } from '../components/header'
import { getToggle } from '../components/toggle'
import { getPageWrapper } from '../components/page-wrapper'
import darkTheme from '../components/dark-theme'
import { AllColorsList } from '../types'

type getUserProps = {
    allTopUsers: AllColorsList[]
}

const SHOW_AS = {
    BASE: 'Show as',
    GRID: 'an awesome grid',
    LIST: 'list',
}

const toggleLabels: [string, string] = [
    `${SHOW_AS.BASE} ${SHOW_AS.GRID}`,
    `${SHOW_AS.BASE} ${SHOW_AS.LIST}`,
]

const title = 'Users by colors'
const author = 'from colors by users'

export const getUser = ({ allTopUsers }: getUserProps): HTMLElement => {
    const grid = getGrid(allTopUsers)

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

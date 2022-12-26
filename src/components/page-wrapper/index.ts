import { getDOM } from '../../helpers/dom-helper'
import { getGrid } from '../grid'
import { getHeader } from '../header'
import { AllHostsList } from '../../types'
import './page-wrapper.css'

type getPageWrapperProps = {
    allTopApps: AllHostsList[]
}
export const getPageWrapper = ({
    allTopApps,
}: getPageWrapperProps): HTMLElement => {
    const grid = getGrid(allTopApps)

    const onToggleHandle = (): void => {
        grid.classList.toggle('grid--list')
    }

    const title = 'Apps by Host'
    const author = 'by Marc Llobet'

    const header = getHeader({
        title,
        author,
        onToggleHandle,
    })

    const page = getDOM({
        element: 'main',
        class: 'main',
        children: [header, grid],
    })

    return page
}

import { getDOM } from '../../helpers/dom-helper'
import './page-wrapper.css'


type getPageWrapperProps = {
    children: HTMLElement | HTMLElement[]
}

export const getPageWrapper = ({
    children
}: getPageWrapperProps): HTMLElement => {

    const page = getDOM({
        element: 'main',
        class: 'main',
        children,
    })

    return page
}

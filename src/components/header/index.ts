import { getDOM } from '../../helpers/dom-helper'
import './header.css'

type HeaderTextProps = {
    title: string
    author: string
}

export const getHeaderText = (props: HeaderTextProps): HTMLElement[] => {
    const headerUser = getDOM({
        element: 'span',
        class: 'header__user',
    })
    headerUser.innerHTML = props.author

    const headerTitle = getDOM({
        element: 'h1',
        class: 'header__title',
    })
    headerTitle.innerHTML = props.title

    return [headerTitle, headerUser]
}

type HeaderProps = HeaderTextProps & {
    headerSideComponent?: HTMLElement
}

export const getHeader = ({
    title,
    author,
    headerSideComponent,
}: HeaderProps): HTMLElement => {
    const headerText = getHeaderText({ title, author })

    const children = headerText
    if(headerSideComponent) children.push(headerSideComponent)

    const header = getDOM({
        element: 'header',
        class: 'header',
        children
    })

    return header
}

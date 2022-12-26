import { getDOM } from '../../helpers/dom-helper'
import './header.css'

type ToggleProps = {
    onToggleHandle: Function
}

const pageWrapperWidth = 840
const SHOW_AS = {
    BASE: 'Show as',
    GRID: 'an awesome grid',
    LIST: 'list'
}

const getToggle = ({ onToggleHandle }: ToggleProps): HTMLElement => {
    const toggleCheckbox = getDOM({
        element: 'input',
        type: 'checkbox',
        checked: 'checked',
        class: 'toggle__input',
        id: 'toggle__input',
    }) as HTMLInputElement

    const toggleText = getDOM({
        class: 'toggle__label',
        element: 'label',
        for: 'toggle__input',
    })

    toggleText.innerHTML = `${SHOW_AS.BASE} ${SHOW_AS.GRID}`

    const toggle = getDOM({
        class: 'toggle',
        children: [toggleCheckbox, toggleText],
    })

    toggleCheckbox.addEventListener('change', () => {
        const showType = toggleCheckbox.checked 
            ? SHOW_AS.GRID
            : SHOW_AS.LIST
        toggleText.innerHTML = `${SHOW_AS.BASE} ${showType}`

        onToggleHandle()
    })

    return toggle
}

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

type HeaderProps = HeaderTextProps & ToggleProps

export const getHeader = ({
    title,
    author,
    onToggleHandle,
}: HeaderProps): HTMLElement => {
    const headerText = getHeaderText({ title, author })
    const headerToggle = getToggle({ onToggleHandle })

    const header = getDOM({
        element: 'header',
        class: 'header',
        children: [...headerText, headerToggle],
    })

    return header
}

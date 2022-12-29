import './card.css'
import { getDOM } from '../../helpers/dom-helper'

type CardProps = {
    title: string
    content: HTMLElement[]
}

export const getCard = ({ title, content }: CardProps): HTMLElement => {
    const heading = getDOM({
        element: 'h3',
        class: 'card__title',
        children: document.createTextNode(title),
    })

    const contentWrap = getDOM({
        class: 'card__content',
        children: content,
    })

    const card = getDOM({
        element: 'div',
        class: 'card card--loading',
        children: [heading, contentWrap],
    })

    setTimeout(() => card.classList.remove('card--loading'), 1500)

    return card
}

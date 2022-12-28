export type buildDomProps = {
    element?: string
    class?: string
    style?: string
    type?: string
    checked?: 'true'
    id?: string
    for?: string
    name?: string
    children?: HTMLElement | HTMLElement[] | Node
}
export const getDOM = ({
    element,
    children,
    ...attributes
}: buildDomProps = {}): HTMLElement => {
    const item = document.createElement(element || 'div')
    Object.entries(attributes).forEach(([attributeKey, attributeValue]) => {
        item.setAttribute(attributeKey, attributeValue)
    })
    if (Array.isArray(children)) {
        children.forEach((child) => item.appendChild(child))
    } else if (children) {
        item.appendChild(children)
    }
    return item
}

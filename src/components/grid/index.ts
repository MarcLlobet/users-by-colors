import { getDOM } from '../../helpers/dom-helper'
import { App, AllHostsList } from '../../types'
import './grid.css'

const getAppList = (apps: App[]) =>
    apps.map((item) => {
        const listApdex = getDOM({
            element: 'span',
            class: 'grid__list-apdex',
        })
        listApdex.innerHTML = `${item.apdex}`

        const listName = getDOM({
            element: 'span',
            class: 'grid__list-name',
        })
        listName.innerHTML = `${item.name}`

        const listItem = getDOM({
            element: 'li',
            class: 'grid__list-item',
            children: [listApdex, listName],
        })

        const itemClickHandle = () => {
            alert(JSON.stringify(item))
        }

        listItem.addEventListener('click', itemClickHandle, false)

        return listItem
    })

export const getGrid = (hostList: AllHostsList[]): HTMLElement => {
    const grid = getDOM({ class: 'grid loading' })
    hostList.forEach(([hostName, apps]: AllHostsList): void => {
        const listItems = getAppList(apps)

        const list = getDOM({
            element: 'ol',
            class: 'grid__list',
            children: listItems,
        })

        const title = getDOM({
            element: 'h3',
            class: 'grid__title',
        })

        title.innerHTML = hostName

        const section = getDOM({
            element: 'section',
            class: 'grid__section',
            children: [title, list],
        })

        setTimeout(() => grid.classList.remove('loading'), 1500)
        grid.appendChild(section)
    })

    return grid
}

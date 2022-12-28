import { getDOM } from '../../helpers/dom-helper'
import { getCard } from '../card' 
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
            element: 'div',
            class: 'grid__list-item',
            children: [listApdex, listName],
        })

        const itemClickHandle = () => {
            alert(JSON.stringify(item))
        }

        listItem.addEventListener('click', itemClickHandle, true)

        return listItem
    })

export const getGrid = (hostList: AllHostsList[]): HTMLElement => {
    const grid = getDOM({ class: 'grid grid--list' })

    hostList.forEach(([hostName, apps]: AllHostsList): void => {
        const listItems = getAppList(apps)

        const card = getCard({
            title: hostName, 
            content: listItems
        })

        grid.appendChild(card)
    })

    return grid
}

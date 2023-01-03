import { getDOM } from '../../helpers/dom-helper'
import { getCard } from '../card'
import { User, AllColorsList } from '../../types'
import './grid.css'

const getUserList = (users: User[]) =>
    users.map((item) => {
        const listRank = getDOM({
            element: 'span',
            class: 'grid__list-rank',
        })
        listRank.innerHTML = `${item.rank}`

        const listName = getDOM({
            element: 'span',
            class: 'grid__list-name',
        })
        listName.innerHTML = `${item.name}`

        const listItem = getDOM({
            element: 'div',
            class: 'grid__list-item',
            children: [listRank, listName],
        })

        const itemClickHandle = () => {
            alert(JSON.stringify(item))
        }

        listItem.addEventListener('click', itemClickHandle, true)

        return listItem
    })

export const getGrid = (hostList: AllColorsList[]): HTMLElement => {
    const grid = getDOM({ class: 'grid grid--list' })

    hostList.forEach(([title, list]: AllColorsList): void => {
        const content = getUserList(list)

        const card = getCard({
            title,
            content,
        })

        grid.appendChild(card)
    })

    return grid
}

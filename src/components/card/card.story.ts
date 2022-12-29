import { getDOM } from '../../helpers/dom-helper'
import { getCard } from './index'

const list = [...Array(5)].map((_, index) =>
    getDOM({
        children: document.createTextNode(`item ${index + 1}`),
    })
)

const Card = getCard({ title: 'Card title', content: list })

export default Card

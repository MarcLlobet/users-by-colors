import { getGrid } from './index'
import { AllColorsList } from '../../types'
const gridData = [
    [
        'color1',
        [
            { name: 'user1', rank: 1, colors: ['color1'] },
            { name: 'user2', rank: 2, colors: ['color1'] },
        ],
    ],
    [
        'color2',
        [
            { name: 'user3', rank: 3, colors: ['color2'] },
            { name: 'user4', rank: 4, colors: ['color2'] },
        ],
    ],
]

const getGridAsGrid = () => {
    const grid = getGrid(gridData as AllColorsList[])
    grid.classList.remove('grid--list')
    return grid
}

export const Grid = getGridAsGrid()

const GridList = getGrid(gridData as AllColorsList[])
export default GridList

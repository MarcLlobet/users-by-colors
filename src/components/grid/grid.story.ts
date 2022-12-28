import {getGrid} from './index'
import {AllHostsList} from '../../types'
const gridData = [
  ['hostname1',[
    {name: 'app1', apdex: 1, host: ['hostname1']},
    {name: 'app2', apdex: 2, host: ['hostname1']}
  ]],
  ['hostname2',[
    {name: 'app3', apdex: 3, host: ['hostname2']},
    {name: 'app4', apdex: 4, host: ['hostname2']}
  ]],
]

const getGridAsGrid = () => {
  const grid = getGrid(gridData as AllHostsList[])
  grid.classList.remove('grid--list')
  return grid
}

export const Grid = getGridAsGrid()

const GridList = getGrid(gridData as AllHostsList[])
export default GridList


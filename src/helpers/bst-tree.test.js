import { BynarySearchTree } from './bst-tree'

const mockList = [
    { apdex: 12, name: 1 },
    { apdex: 5, name: 2 },
    { apdex: 787, name: 3 },
    { apdex: 1, name: 4 },
    { apdex: 23, name: 5 },
    { apdex: 600, name: 6 },
]

describe('BynarySearchTree', () => {
    let BSTTree = null
    beforeEach(() => {
        BSTTree = new BynarySearchTree()
        mockList.forEach((node) => {
            BSTTree.addNode(node)
        })
    })

    it('adds nodes to the tree', () => {
        BSTTree.addNode({ apdex: 1000, name: 7 })
        const list = BSTTree.getNodes()
        const apdexList = list.map(({ apdex }) => apdex)

        expect(apdexList).toEqual([1000, 787, 600, 23, 12, 5, 1])
    })

    it('removes nodes from the tree', () => {
        BSTTree.removeNode({ apdex: 787, name: 3 })
        const list = BSTTree.getNodes()
        const apdexList = list.map(({ apdex }) => apdex)
        expect(apdexList).toEqual([600, 23, 12, 5, 1])
    })

    it('removes exactly a node with same apdex from the tree', () => {
        BSTTree.addNode({ apdex: 787, name: 7 })
        BSTTree.removeNode({ apdex: 787, name: 3 })
        const list = BSTTree.getNodes()
        const apdexList = list.map(({ apdex, name }) => [apdex, name])
        expect(apdexList).toEqual([
            [787, 7],
            [600, 6],
            [23, 5],
            [12, 1],
            [5, 2],
            [1, 4],
        ])
    })

    it('sorts decrementally by apdex', () => {
        const list = BSTTree.getNodes()
        const apdexList = list.map(({ apdex }) => apdex)
        expect(apdexList).toEqual([787, 600, 23, 12, 5, 1])
    })

    it('returns the passed amount', () => {
        const list = BSTTree.getNodes(3)
        const apdexList = list.map(({ apdex }) => apdex)
        expect(apdexList).toEqual([787, 600, 23])
    })
})

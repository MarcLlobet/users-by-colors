import { App } from '../types/index'

export type AppNode = {
    apdex: number
    left: NullableAppNode
    right: NullableAppNode
    app: App
}

export type NullableAppNode = AppNode | null

export class Node {
    app: App
    apdex: number
    left: NullableAppNode
    right: NullableAppNode

    constructor(app: App) {
        this.app = app
        this.apdex = app.apdex
        this.left = null
        this.right = null
    }
}

export class BynarySearchTree {
    root: NullableAppNode

    constructor() {
        this.root = null
    }

    addNode(app: App): void {
        const newNode: AppNode = new Node(app)
        if (!this.root) {
            this.root = newNode
            return
        }
        this.addNodeRecurrent(this.root, newNode)
    }

    private addNodeRecurrent(node: AppNode, newNode: AppNode): void {
        if (newNode.apdex > node.apdex) {
            if (!node.left) {
                node.left = newNode
            } else {
                this.addNodeRecurrent(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode
            } else {
                this.addNodeRecurrent(node.right, newNode)
            }
        }
    }

    getNodes(amount: number | undefined = Infinity): App[] {
        const list: App[] = []

        this.getNodesRecurrent(this.root, list, amount)

        return list
    }

    private getNodesRecurrent(
        node: NullableAppNode,
        list: App[],
        amount: number
    ): void {
        if (!node || list.length === amount) return

        this.getNodesRecurrent(node.left, list, amount)
        if (list.length === amount) return
        list.push(node.app)
        this.getNodesRecurrent(node.right, list, amount)
    }

    private getLowestNode(node: AppNode): AppNode {
        if (!node.right) return node
        return this.getLowestNode(node.right)
    }

    removeNode(node: AppNode): void {
        this.root = this.removeNodeRecurrent(this.root, node)
    }

    private removeNodeRecurrent(
        node: NullableAppNode,
        target: AppNode
    ): NullableAppNode {
        if (!node) return null
        else if (target.apdex < node.apdex) {
            node.right = this.removeNodeRecurrent(node.right, target)
            return node
        } else if (target.apdex > node.apdex) {
            node.left = this.removeNodeRecurrent(node.left, target)
            return node
        } else {
            if (!node.right && !node.left) {
                node = null
                return node
            }

            if (!node.right) {
                node = node.left
                return node
            } else if (!node.left) {
                node = node.right
                return node
            }

            const lowestNode = this.getLowestNode(node.left)
            node = lowestNode

            node.left = this.removeNodeRecurrent(node.left, lowestNode)
            return node
        }
    }
}

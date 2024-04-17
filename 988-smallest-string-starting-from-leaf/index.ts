//Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function smallestFromLeaf(root: TreeNode | null): string {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let lexMap: number[][] = []

    function iterateTree(tree: TreeNode, acc: number[] = []): void {
        if(tree.left && !tree.right) {
            iterateTree(tree.left, [...acc, tree.val] )
            return
        }
        if(!tree.left && tree.right) {
            iterateTree(tree.right, [...acc, tree.val] )
            return
        }
        if(!tree.left && !tree.right) {
            lexMap.push([...acc, tree.val])
            return
        }
        iterateTree(tree.left, [...acc, tree.val] )
        iterateTree(tree.right, [...acc, tree.val])
    }

    iterateTree(root)

    return lexMap.map(val => val.reverse().reduce((acc, val) => acc += alphabet[val], '')).sort((a,b) => {
        return a < b ? -1 : 1
    })[0]

};
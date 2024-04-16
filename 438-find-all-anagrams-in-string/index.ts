
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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {

    if(depth === 1) {
        return new TreeNode(val, root)
    }

    function iterateTree(tree: TreeNode | null, currentDepth: number = 1) {
        if(!tree) {
            return
        }
        if(currentDepth === depth - 1 ) {
            tree.left = new TreeNode(val, tree.left)
            tree.right = new TreeNode(val, null, tree.right)
            return
        }
        iterateTree(tree.left, currentDepth + 1);
        iterateTree(tree.right, currentDepth + 1);
    }

    iterateTree(root)
    return root;
}
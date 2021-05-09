/**
 * Represent a node a binary tree
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Converts the given sorted array to a BST
 * @param  {Array} arr sorted array
 * @return {TreeNode} root of the converted BST
 */
const sortedArrayToBST = (arr) => {
    if (arr.length === 0) {
        return;
    }

    const arrayToBST = (low = 0, high = arr.length - 1) => {
        if (low > high) {
            return null;
        }
        let mid = Math.floor((high + low) / 2);
        let root = new TreeNode(arr[mid]);
        root.left = arrayToBST(low, mid - 1);
        root.right = arrayToBST(mid + 1, high);
        return root;
    }

    return arrayToBST();
};

module.exports = sortedArrayToBST;
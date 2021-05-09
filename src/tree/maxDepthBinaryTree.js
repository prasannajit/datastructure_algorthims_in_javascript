/**
 * Finds the maximum depth of a binary tree
 * @param  {Tree} root root of a binary tree
 * @return {number} max depth of binary tree
 */
const maxDepthBinaryTree = (root) => {
    if (!root) {
        return 0;
    }
    let maxLeft = 0, maxRight = 0;
    if (root.left) {
        maxLeft = maxDepthBinaryTree(root.left);
    }
    if (root.right) {
        maxRight = maxDepthBinaryTree(root.right)
    }
    return 1 + Math.max(maxLeft, maxRight);
};

module.exports = maxDepthBinaryTree;
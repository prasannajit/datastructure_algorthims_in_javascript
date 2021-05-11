class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(val) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }
        const _add = (node, value) => {
            if (value <= node.val) {
                if (!node.left) {
                    node.left = new TreeNode(value);
                    return;
                } else {
                    return _add(node.left, value);
                }
            } else {
                if (!node.right) {
                    node.right = new TreeNode(value);
                    return;
                } else {
                    return _add(node.right, value);
                }
            }
        }
        _add(this.root, val);
    }

    inOrderTraversal() {
        // Left, Node, Right
        const _inOrderTraversal = (node) => {
            if (node.left) {
                _inOrderTraversal(node.left);
            }
            console.log(node.val);
            if (node.right) {
                _inOrderTraversal(node.right);
            }
        }
        if (this.root) {
            _inOrderTraversal(this.root);
        }
    }

    preOrderTraversal() {
        // Node, Left, Right
        const _preOrderTraversal = (node) => {
            console.log(node.val);
            if (node.left) {
                _preOrderTraversal(node.left);
            }
            if (node.right) {
                _preOrderTraversal(node.right);
            }
        }
        if (this.root) {
            _preOrderTraversal(this.root);
        }
    }

    postOrderTraversal() {
        // Left, Right, Node
        const _postOrderTraversal = (node) => {
            if (node.left) {
                _postOrderTraversal(node.left);
            }
            if (node.right) {
                _postOrderTraversal(node.right);
            }
            console.log(node.val);
        }
        if (this.root) {
            _postOrderTraversal(this.root);
        }
    }
}
module.exports = BinarySearchTree;
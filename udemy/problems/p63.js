// 63 - Binary Search Tree - BFS Exercise

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    breadthFirstSearch() {
        if (!this.root) return [];
        const res = [];
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            res.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        return res;
    }
    insert(val) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return this;
        }
        let node = this.root;
        while (true) {
            if (val < node.val) {
                if (!node.left) {
                    node.left = new TreeNode(val);
                    return this;
                }
                node = node.left;
            } else {
                if (!node.right) {
                    node.right = new TreeNode(val);
                    return this;
                }
                node = node.right;
            }
        }
    }
}

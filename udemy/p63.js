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
        let queue = [this.root];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const node = queue[i];
                res.push(node.val);
                if (node.left) nextQueue.push(node.left);
                if (node.right) nextQueue.push(node.right);
            }
            queue = nextQueue;
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

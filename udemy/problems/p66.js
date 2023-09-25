// 66 - Binary Search Tree Exercise - Check If Balanced

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }
        let node = this.root;
        while (true) {
            if (val < node.value) {
                if (!node.left) {
                    node.left = new Node(val);
                    return this;
                }
                node = node.left;
            } else {
                if (!node.right) {
                    node.right = new Node(val);
                    return this;
                }
                node = node.right;
            }
        }
    }

    isBalanced() {
        function dfs(node) {
            if (!node) return 0;
            const left = dfs(node.left);
            const right = dfs(node.right);
            return Math.abs(left - right) > 1 ? Infinity : Math.max(left, right) + 1;
        }
        return dfs(this.root) !== Infinity;
    }
}

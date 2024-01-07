// 65 - Binary Search Tree Exercise - Find 2nd Largest Node

class TreeNode {
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
    findSecondLargest() {
        function dfs(node) {
            if (!node || arr.length === 2) return;
            dfs(node.right);
            if (arr.length < 2) arr.push(node.value);
            dfs(node.left);
        }
        const arr = [];
        dfs(this.root);
        return arr[1];
    }
    insert(val) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return this;
        }
        let node = this.root;
        while (true) {
            if (val < node.value) {
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

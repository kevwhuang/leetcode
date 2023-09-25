// 65 - Binary Search Tree Exercise - Find 2nd Largest Node

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

    findSecondLargest() {
        function dfs(node) {
            if (!node || arr.length === 2) return;
            node.right && dfs(node.right);
            arr.length < 2 && arr.push(node.value);
            node.left && dfs(node.left);
        }
        const arr = [];
        dfs(this.root);
        return arr[1];
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
}

// 62 - Binary Search Tree - DFS Exercise

class Node {
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

    DFSInOrder() {
        function dfs(node) {
            node.left && dfs(node.left);
            res.push(node.val);
            node.right && dfs(node.right);
        }
        if (!this.root) return [];
        const res = [];
        dfs(this.root);
        return res;
    }

    DFSPostOrder() {
        function dfs(node) {
            node.left && dfs(node.left);
            node.right && dfs(node.right);
            res.push(node.val);
        }
        if (!this.root) return [];
        const res = [];
        dfs(this.root);
        return res;
    }

    DFSPreOrder() {
        function dfs(node) {
            res.push(node.val);
            node.left && dfs(node.left);
            node.right && dfs(node.right);
        }
        if (!this.root) return [];
        const res = [];
        dfs(this.root);
        return res;
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }
        let node = this.root;
        while (true) {
            if (val < node.val) {
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

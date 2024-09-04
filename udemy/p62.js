// 62 - Binary Search Tree - DFS Exercise

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
    DFSInOrder() {
        function dfs(node) {
            if (!node) return;
            dfs(node.left);
            res.push(node.val);
            dfs(node.right);
        }
        if (!this.root) return [];
        const res = [];
        dfs(this.root);
        return res;
    }
    DFSPostOrder() {
        function dfs(node) {
            if (!node) return;
            dfs(node.left);
            dfs(node.right);
            res.push(node.val);
        }
        if (!this.root) return [];
        const res = [];
        dfs(this.root);
        return res;
    }
    DFSPreOrder() {
        function dfs(node) {
            if (!node) return;
            res.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
        if (!this.root) return [];
        const res = [];
        dfs(this.root);
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

class BinarySearchTree {
    constructor() {
        this.tree = null;
    }
    bfs() {
        if (!this.tree) return [];
        const res = [];
        let Q = [this.tree];
        while (Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const node = Q[i];
                res.push(node.val);
                if (node.left) N.push(node.left);
                if (node.right) N.push(node.right);
            }
            Q = N;
        }
        return res;
    }
    dfs(type = 'in') {
        const res = [];
        if (type === 'pre') this.#preorder(this.tree, res);
        else if (type === 'in') this.#inorder(this.tree, res);
        else if (type === 'post') this.#postorder(this.tree, res);
        return res;
    }
    find(val) {
        let node = this.tree;
        while (node) {
            if (val < node.val) node = node.left;
            else if (val > node.val) node = node.right;
            else return node;
        }
        return null;
    }
    insert(val) {
        if (!this.tree) return this.tree = new Node(val);
        let node = this.tree;
        while (true) {
            if (val < node.val) {
                if (!node.left) return node.left = new Node(val);
                node = node.left;
            } else if (val > node.val) {
                if (!node.right) return node.right = new Node(val);
                node = node.right;
            } else {
                return node;
            }
        }
    }
    #inorder(node, vals) {
        if (!node) return;
        this.#inorder(node.left, vals);
        vals.push(node.val);
        this.#inorder(node.right, vals);
    }
    #postorder(node, vals) {
        if (!node) return;
        this.#postorder(node.left, vals);
        this.#postorder(node.right, vals);
        vals.push(node.val);
    }
    #preorder(node, vals) {
        if (!node) return;
        vals.push(node.val);
        this.#preorder(node.left, vals);
        this.#preorder(node.right, vals);
    }
}

class Node {
    constructor(val, left, right) {
        this.val = val === undefined ? null : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

module.exports = BinarySearchTree;

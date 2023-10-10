class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    bfs() {
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

    dfs(type = 'pre') {
        if (!this.root) return [];
        const res = [];
        if (type === 'pre') this.#traversePre(this.root, res);
        else if (type === 'post') this.#traversePost(this.root, res);
        else if (type === 'in') this.#traverseIn(this.root, res);
        else return false;
        return res;
    }

    find(val) {
        if (!this.root) return false;
        let node = this.root;
        while (node) {
            if (val < node.val) node = node.left;
            else if (val > node.val) node = node.right;
            else return node;
        }
        return false;
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
            } else if (val > node.val) {
                if (!node.right) {
                    node.right = new TreeNode(val);
                    return this;
                }
                node = node.right;
            } else {
                return false;
            }
        }
    }

    #traverseIn(cur, arr) {
        if (!cur) return;
        this.#traverseIn(cur.left, arr);
        arr.push(cur.val);
        this.#traverseIn(cur.right, arr);
    }

    #traversePost(cur, arr) {
        if (!cur) return;
        this.#traversePost(cur.left, arr);
        this.#traversePost(cur.right, arr);
        arr.push(cur.val);
    }

    #traversePre(cur, arr) {
        if (!cur) return;
        arr.push(cur.val);
        this.#traversePre(cur.left, arr);
        this.#traversePre(cur.right, arr);
    }
}

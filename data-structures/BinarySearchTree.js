class Node {
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
        let cur;
        while (queue.length) {
            cur = queue.shift();
            res.push(cur.val);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        return res;
    }

    dfs(type = 'pre') {
        if (!this.root) return [];
        const res = [];
        if (type === 'pre') this.traversePre(this.root, res);
        else if (type === 'post') this.traversePost(this.root, res);
        else if (type === 'in') this.traverseIn(this.root, res);
        else return false;
        return res;
    }

    find(val) {
        if (!this.root) return false;
        let cur = this.root;
        while (cur) {
            if (val < cur.val) cur = cur.left;
            else if (val > cur.val) cur = cur.right;
            else return cur;
        }
        return false;
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }
        const node = new Node(val);
        let cur = this.root;
        while (true) {
            if (val < cur.val) {
                if (!cur.left) {
                    cur.left = node;
                    return this;
                }
                cur = cur.left;
            } else if (val > cur.val) {
                if (!cur.right) {
                    cur.right = node;
                    return this;
                }
                cur = cur.right;
            } else {
                return false;
            }
        }
    }

    traverseIn(cur, arr) {
        if (!cur) return;
        this.traverseIn(cur.left, arr);
        arr.push(cur.val);
        this.traverseIn(cur.right, arr);
    }

    traversePost(cur, arr) {
        if (!cur) return;
        this.traversePost(cur.left, arr);
        this.traversePost(cur.right, arr);
        arr.push(cur.val);
    }

    traversePre(cur, arr) {
        if (!cur) return;
        arr.push(cur.val);
        this.traversePre(cur.left, arr);
        this.traversePre(cur.right, arr);
    }
}

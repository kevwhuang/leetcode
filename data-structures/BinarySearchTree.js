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

    bfs() {
        if (!this.root) return [];
        const res = [];
        const queue = [this.root];
        let cur;
        while (queue.length) {
            cur = queue.shift();
            res.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
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
}

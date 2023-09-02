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
        const node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
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

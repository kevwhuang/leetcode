// 64 - Binary Search Tree - remove Exercise

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

    remove(val) {
        this.root = this.removeNode(this.root, val);
    }

    removeNode(node, val) {
        if (val < node.value) {
            if (node.left) node.left = this.removeNode(node.left, val);
        } else if (val > node.value) {
            if (node.right) node.right = this.removeNode(node.right, val);
        } else {
            if (node.left && node.right) {
                let cur = node.right;
                while (cur.left) cur = cur.left;
                node.value = cur.value;
                cur.value = val;
                node.right = this.removeNode(node.right, val);
            } else if (node.left) {
                return node.left;
            } else if (node.right) {
                return node.right;
            } else {
                return null;
            }
        }
        return node;
    }
}

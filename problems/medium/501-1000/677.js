// 677 - Map Sum Pairs

class MapSum {
    constructor() {
        this.trie = {};
    }
    insert(key, val) {
        let node = this.trie;
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            if (!(char in node)) node[char] = {};
            node = node[char];
        }
        node.val = val;
    }
    sum(prefix) {
        let node = this.trie;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (char in node) node = node[char];
            else return 0;
        }
        let sum = 0, queue = [node];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                node = queue[i];
                for (const key in node) {
                    if (key === 'val') sum += node.val;
                    else nextQueue.push(node[key]);
                }
            }
            queue = nextQueue;
        }
        return sum;
    }
}

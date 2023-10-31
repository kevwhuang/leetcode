// 138 - Copy List With Random Pointer

/**
 * @param {Node} head
 * @return {Node}
 */

function copyRandomList(head) {
    const map = new Map([[null, null]]);
    let cur = head;
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    while (cur) {
        const node = map.get(cur);
        node.next = map.get(cur.next);
        node.random = map.get(cur.random);
        cur = cur.next;
    }
    return map.get(head);
}

class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

module.exports = copyRandomList;

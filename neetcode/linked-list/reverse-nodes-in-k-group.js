// 25 - Reverse Nodes in K-Group

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function reverseKGroup(head, k) {
    const res = new ListNode();
    let node1 = res;
    while (head) {
        const next = head;
        let i = k;
        while (head && --i) head = head.next;
        if (!head && (node1.next = next)) break;
        const prev = head;
        head = head.next, prev.next = null;
        let node2 = null, node3 = next;
        while (node3) {
            const cur = node3;
            node3 = node3.next, cur.next = node2, node2 = cur;
        }
        node1.next = node2, node1 = next;
    }
    return res.next;
}

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

module.exports = reverseKGroup;

// 25 - Reverse Nodes in K-Group

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function reverseKGroup(head, k) {
    let node = head, i = 0;
    while (node && ++i < k) node = node.next;
    if (!node) return head;
    const next = node.next;
    node.next = null, node = head;
    let res = null;
    while (node) {
        const cur = node;
        node = node.next, cur.next = res, res = cur;
    }
    head.next = reverseKGroup(next, k);
    return res;
}

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

module.exports = reverseKGroup;

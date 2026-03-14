// 2 - Add Two Numbers

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
    const res = new ListNode();
    let prev = 0, node = res;
    while (prev || l1 || l2) {
        const sum = prev + (l1?.val ?? 0) + (l2?.val ?? 0);
        prev = sum / 10 >> 0, l1 = l1?.next, l2 = l2?.next;
        node = node.next = new ListNode(sum % 10);
    }
    return res.next;
}

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

module.exports = addTwoNumbers;

// 2 - Add Two Numbers

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
    const sentinel = new ListNode();
    let sum, carry = 0, tail = sentinel;
    while (l1 || l2) {
        sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry) tail.next = new ListNode(carry);
    return sentinel.next;
}

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

module.exports = addTwoNumbers;

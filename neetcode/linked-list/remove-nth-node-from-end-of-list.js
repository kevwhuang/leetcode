// 19 - Remove Nth Node From End of List

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNthFromEnd(head, n) {
    let fast = head;
    while (n--) fast = fast.next;
    if (!fast) return head.next;
    let slow = head;
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
}

module.exports = removeNthFromEnd;

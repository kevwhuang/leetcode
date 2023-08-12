// 141 - Linked List Cycle

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function hasCycle(head) {
    let slow = head;
    while (head && head.next) {
        head = head.next.next;
        slow = slow.next;
        if (head === slow) return true;
    }
    return false;
}

module.exports = hasCycle;

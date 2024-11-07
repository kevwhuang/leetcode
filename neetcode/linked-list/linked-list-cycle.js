// 141 - Linked List Cycle

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function hasCycle(head) {
    let cur = head;
    while (head && head.next) {
        cur = cur.next, head = head.next.next;
        if (cur === head) return true;
    }
    return false;
}

module.exports = hasCycle;

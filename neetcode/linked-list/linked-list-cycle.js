// 141 - Linked List Cycle

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function hasCycle(head) {
    let node = head;
    while (head && head.next) {
        node = node.next, head = head.next.next;
        if (node === head) return true;
    }
    return false;
}

module.exports = hasCycle;

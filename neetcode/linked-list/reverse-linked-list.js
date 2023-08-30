// 206 - Reverse Linked List

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
    let reversed = null, cur;
    while (head) {
        cur = head;
        head = head.next;
        cur.next = reversed;
        reversed = cur;
    }
    return reversed;
}

module.exports = reverseList;

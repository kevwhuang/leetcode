// 206 - Reverse Linked List

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
    let cur, rvs = null;
    while (head) {
        cur = head;
        head = head.next;
        cur.next = rvs;
        rvs = cur;
    }
    return rvs;
}

module.exports = reverseList;

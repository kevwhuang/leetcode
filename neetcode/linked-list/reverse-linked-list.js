// 206 - Reverse Linked List

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
    let res = null;
    while (head) {
        const cur = head;
        head = head.next, cur.next = res, res = cur;
    }
    return res;
}

module.exports = reverseList;

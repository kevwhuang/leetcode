// 206 - Reverse Linked List

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

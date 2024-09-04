// 206 - Reverse Linked List

function reverseList(head) {
    let rvs = null, cur;
    while (head) {
        cur = head;
        head = head.next;
        cur.next = rvs;
        rvs = cur;
    }
    return rvs;
}

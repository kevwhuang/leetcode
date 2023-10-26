// 92 - Reverse Linked List II

function reverseBetween(head, left, right) {
    right -= left;
    const sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while (--left > 0) prev = prev.next;
    let cur = prev.next;
    while (right--) {
        [prev.next, cur.next.next, cur.next] = [cur.next, prev.next, cur.next.next];
    }
    return sentinel.next;
}

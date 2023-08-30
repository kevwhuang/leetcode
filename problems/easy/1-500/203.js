// 203 - Remove Linked List Elements

function removeElements(head, val) {
    if (!head || !val) return head;
    const sentinel = new ListNode(0);
    sentinel.next = head;
    let cur = sentinel;
    while (cur) {
        val === cur.next?.val ? cur.next = cur.next.next : cur = cur.next;
    }
    return sentinel.next;
}

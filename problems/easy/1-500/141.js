// 141 - Linked List Cycle

function hasCycle(head) {
    let cur = head;
    while (head && head.next) {
        cur = cur.next, head = head.next.next;
        if (cur === head) return true;
    }
    return false;
}

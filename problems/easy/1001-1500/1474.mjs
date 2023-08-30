// 1474 - Delete N Nodes After M Nodes of a Linked List

function deleteNodes(head, m, n) {
    let cur = head;
    while (cur) {
        for (let i = 0; i < m - 1 && cur; i++) {
            cur = cur.next;
        }
        let prev = cur;
        for (let i = 0; i < n + 1 && cur; i++) {
            cur = cur.next;
        }
        if (prev) prev.next = cur;
    }
    return head;
}

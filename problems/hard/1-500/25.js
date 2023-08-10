// 25 - Reverse Nodes in K-Group

function reverseKGroup(head, k) {
    const vals = new Array(k);
    let slow = head, fast = head;
    while (fast) {
        let i = k - 1;
        while (fast && ~i) {
            vals[i--] = fast.val;
            fast = fast.next;
        }
        if (i !== -1) break;
        for (let i = 0; i < k; i++) {
            slow.val = vals[i];
            slow = slow.next;
        }
    }
    return head;
}

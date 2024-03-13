// 143 - Reorder List

function reorderList(head) {
    const vals = [];
    let cur = head;
    while (cur) {
        vals.push(cur.val);
        cur = cur.next;
    }
    let l = 0, r = vals.length - 1;
    let isForward = true;
    cur = head;
    while (cur) {
        if (isForward) {
            cur.val = vals[l++];
            isForward = false;
        } else {
            cur.val = vals[r--];
            isForward = true;
        }
        cur = cur.next;
    }
    return head;
}

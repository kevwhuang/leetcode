// 143 - Reorder List

/**
 * @param {ListNode} head
 * @return {void}
 */

function reorderList(head) {
    const vals = [];
    let cur = head;
    while (cur) vals.push(cur.val) && (cur = cur.next);
    cur = head;
    let forward = true, i = 0, j = vals.length - 1;
    while (cur) {
        cur.val = forward ? vals[i++] : vals[j--];
        cur = cur.next;
        forward = !forward;
    }
    return head;
}

module.exports = reorderList;

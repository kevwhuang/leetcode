// 23 - Merge K Sorted Lists

function mergeKLists(lists) {
    let size = 0, cur;
    for (let i = 0; i < lists.length; i++) {
        cur = lists[i];
        while (cur) {
            size++;
            cur = cur.next;
        }
    }
    const arr = new Int16Array(size);
    for (let i = 0, j = 0; i < lists.length; i++) {
        cur = lists[i];
        while (cur) {
            arr[j++] = cur.val;
            cur = cur.next;
        }
    }
    arr.sort();
    const sentinel = new ListNode();
    cur = sentinel;
    for (let i = 0; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return sentinel.next;
}

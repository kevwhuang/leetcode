// 21 - Merge Two Sorted Lists

function mergeTwoLists(list1, list2) {
    const sentinel = new ListNode();
    let cur = sentinel;
    while (list1 && list2) {
        if (list1.val >= list2.val) {
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }
    cur.next = list1 || list2;
    return sentinel.next;
}

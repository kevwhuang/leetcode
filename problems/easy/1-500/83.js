// 83 - Remove Duplicates From Sorted List

function deleteDuplicates(head) {
    let cur = head;
    while (cur) {
        cur.val === cur.next?.val ? cur.next = cur.next.next : cur = cur.next;
    }
    return head;
}

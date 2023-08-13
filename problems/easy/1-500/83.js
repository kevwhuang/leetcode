// 83 - Remove Duplicates From Sorted List

function deleteDuplicates(head) {
    let current = head;
    while (current) {
        current.val === current.next?.val
            ? current.next = current.next.next
            : current = current.next;
    }
    return head;
}

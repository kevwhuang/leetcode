// 2674 - Split a Circular Linked List

function splitCircularLinkedList(list) {
    let slow = fast = list;
    let len = 1;
    while (slow.next !== fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        len++;
    }
    const tail2 = slow;
    slow = list;
    len = Math.ceil(len / 2);
    while (--len) slow = slow.next;
    const head2 = slow.next;
    tail2.next = head2;
    slow.next = list;
    return [list, head2];
}

// 876 - Middle of the Linked List

function middleNode(head) {
    let slow = head;
    while (head && head.next) {
        head = head.next.next;
        slow = slow.next;
    }
    return slow;
}

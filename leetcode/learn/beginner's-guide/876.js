// 876 - Middle of the Linked List

function middleNode(head) {
    let current = head;
    let middle = head;
    while (current && current.next) {
        current = current.next.next;
        middle = middle.next;
    }
    return middle;
}

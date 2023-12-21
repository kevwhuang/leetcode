// 328 - Odd Even Linked List

function oddEvenList(head) {
    let oddTail = new ListNode(), evenTail = new ListNode();
    const oddHead = oddTail, evenHead = evenTail;
    let isOdd = true;
    while (head) {
        if (isOdd) {
            oddTail.next = head;
            oddTail = oddTail.next;
        } else {
            evenTail.next = head;
            evenTail = evenTail.next;
        }
        isOdd = !isOdd;
        head = head.next;
    }
    evenTail.next = null;
    oddTail.next = evenHead.next;
    return oddHead.next;
}

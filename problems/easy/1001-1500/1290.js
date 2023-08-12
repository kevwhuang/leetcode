// 1290 - Convert Binary Number in a Linked List to Integer

function getDecimalValue(head) {
    let num = 0;
    while (head) {
        num = num << 1 | head.val;
        head = head.next;
    }
    return num;
}

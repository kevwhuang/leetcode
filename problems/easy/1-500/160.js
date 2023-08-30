// 160 - Intersection of Two Linked Lists

function getIntersectionNode(headA, headB) {
    let a = headA, b = headB;
    while (a !== b) {
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }
    return a;
}

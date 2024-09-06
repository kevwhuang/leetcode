// 23 - Merge K Sorted Lists

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeKLists(lists) {
    let size = 0;
    for (let i = 0; i < lists.length; i++) {
        let cur = lists[i];
        while (cur) size++, cur = cur.next;
    }
    const arr = new Int16Array(size);
    for (let i = 0, j = 0; i < lists.length; i++) {
        let cur = lists[i];
        while (cur) arr[j++] = cur.val, cur = cur.next;
    }
    arr.sort();
    const sentinel = new ListNode();
    let cur = sentinel;
    for (let i = 0; i < arr.length; i++) {
        cur = cur.next = new ListNode(arr[i]);
    }
    return sentinel.next;
}

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

module.exports = mergeKLists;

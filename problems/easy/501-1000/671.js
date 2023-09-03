// 671 - Second Minimum Node in a Binary Tree

function findSecondMinimumValue(root) {
    const queue = [root];
    let cur, bound = Infinity;
    while (queue.length) {
        cur = queue.shift();
        if (cur.val !== root.val && cur.val < bound) bound = cur.val;
        cur.left?.val < bound && queue.push(cur.left);
        cur.right?.val < bound && queue.push(cur.right);
    }
    return bound === Infinity ? -1 : bound;
}

// 671 - Second Minimum Node in a Binary Tree

function findSecondMinimumValue(root) {
    let bound = Infinity, queue = [root];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node.val !== root.val && node.val < bound) bound = node.val;
            if (node.left && node.left.val < bound) nextQueue.push(node.left);
            if (node.right && node.right.val < bound) nextQueue.push(node.right);
        }
        queue = nextQueue;
    }
    return bound === Infinity ? -1 : bound;
}

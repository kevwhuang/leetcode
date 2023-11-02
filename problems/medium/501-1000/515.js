// 515 - Find Largest Value in Each Tree Row

function largestValues(root) {
    if (!root) return [];
    const res = [];
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        let max = -Infinity;
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            max = Math.max(node.val, max);
            node.left && newQueue.push(node.left);
            node.right && newQueue.push(node.right);
        }
        queue = newQueue;
        res.push(max);
    }
    return res;
}

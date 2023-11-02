// 513 - Find Bottom Left Tree Value

function findBottomLeftValue(root) {
    let queue = [root];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            node.left && newQueue.push(node.left);
            node.right && newQueue.push(node.right);
        }
        if (newQueue.length === 0) return queue[0].val;
        queue = newQueue;
    }
}

// 102 - Binary Tree Level Order Traversal

function levelOrder(root) {
    if (!root) return [];
    const res = [];
    let queue = [root];
    while (queue.length) {
        const nextQueue = [];
        const level = new Array(queue.length);
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            level[i] = node.val;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        res.push(level);
        queue = nextQueue;
    }
    return res;
}

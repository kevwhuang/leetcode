// 102 - Binary Tree Level Order Traversal

function levelOrder(root) {
    if (!root) return [];
    const res = [];
    let queue = [root];
    while (queue.length) {
        const nextQueue = [];
        const arr = new Int16Array(queue.length);
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            arr[i] = node.val;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        res.push(arr);
        queue = nextQueue;
    }
    return res;
}

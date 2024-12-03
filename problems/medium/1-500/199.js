// 199 - Binary Tree Right Side View

function rightSideView(root) {
    if (!root) return [];
    const res = [];
    let queue = [root];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        res.push(queue.at(-1).val);
        queue = nextQueue;
    }
    return res;
}

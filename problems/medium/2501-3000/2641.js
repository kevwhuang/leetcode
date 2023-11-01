// 2641 - Cousins in Binary Tree II

function replaceValueInTree(root) {
    let nextLevelSum = (root.left?.val || 0) + (root.right?.val || 0);
    let queue = [[root, nextLevelSum]];
    while (queue.length) {
        const newQueue = [];
        const levelSum = nextLevelSum;
        nextLevelSum = 0;
        for (let i = 0; i < queue.length; i++) {
            const [node, siblingSum] = queue[i];
            node.val = levelSum - siblingSum;
            const childrenSum = (node.left?.val || 0) + (node.right?.val || 0);
            nextLevelSum += childrenSum;
            if (node.left) newQueue.push([node.left, childrenSum]);
            if (node.right) newQueue.push([node.right, childrenSum]);
        }
        queue = newQueue;
    }
    return root;
}

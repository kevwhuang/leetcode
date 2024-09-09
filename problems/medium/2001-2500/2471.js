// 2471 - Minimum Number of Operations to Sort a Binary Tree by Level

function minimumOperations(root) {
    let ops = 0;
    let queue = [root];
    while (queue.length) {
        const len = queue.length;
        const level = [];
        const nextQueue = [];
        for (let i = 0; i < len; i++) {
            const node = queue[i];
            level[i] = node.val;
            if (node.left) nextQueue.push(node.left);
            if (node.right) nextQueue.push(node.right);
        }
        const nums = level.map((e, i) => [i, e]);
        nums.sort((a, b) => a[1] - b[1]);
        for (let i = 0; i < len;) {
            const idx1 = nums[i][0];
            if (i === idx1) { i++; continue; }
            const idx2 = nums[idx1][0];
            [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
            ops++;
        }
        queue = nextQueue;
    }
    return ops;
}

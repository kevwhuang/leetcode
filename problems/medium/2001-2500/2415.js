// 2415 - Reverse Odd Levels of Binary Tree

function reverseOddLevels(root) {
    const queue = [root];
    let level = 0;
    while (queue.length) {
        const len = queue.length;
        if (level++ % 2) {
            let l = -1, r = len;
            while (++l < --r) {
                [queue[l].val, queue[r].val] = [queue[r].val, queue[l].val];
            }
        }
        for (let i = 0, node; i < len; i++) {
            node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
}

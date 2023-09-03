// 111 - Minimum Depth of Binary Tree

function minDepth(root) {
    if (!root) return 0;
    const queue = [root];
    let len, cur, depth = 1;
    while (queue.length) {
        len = queue.length;
        for (let i = 0; i < len; i++) {
            cur = queue.shift();
            if (!cur.left && !cur.right) return depth;
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        depth++;
    }
}

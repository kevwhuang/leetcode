// 637 - Average of Levels in Binary Tree

function averageOfLevels(root) {
    const res = [];
    const queue = [root];
    let len, cur, sum;
    while (queue.length) {
        len = queue.length;
        sum = 0;
        for (let i = 0; i < len; i++) {
            cur = queue.shift();
            sum += cur.val;
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        res.push(sum / len);
    }
    return res;
}

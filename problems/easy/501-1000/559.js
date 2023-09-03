// 559 - Maximum Depth of N-Ary Tree

function maxDepth(root) {
    if (!root) return 0;
    if (!root.children.length) return 1;
    return Math.max.apply(null, root.children.map(node => maxDepth(node) + 1));
}

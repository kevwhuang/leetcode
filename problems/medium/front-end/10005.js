// 10005 - Count Leaf Nodes

export function countLeafNodes(node) {
    let leaves = 0;
    const treeWalker = document.createTreeWalker(node);
    while (treeWalker.nextNode()) {
        if (treeWalker.currentNode.childNodes.length) continue;
        leaves++;
    }
    return leaves || 1;
}

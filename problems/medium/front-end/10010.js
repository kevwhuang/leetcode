// 10010 - Delete Nodes With Text

export function deleteNodesWithText(node, searchText) {
    const filterFn = node => node.textContent.includes(searchText);
    const treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, filterFn);
    const marked = [];
    while (treeWalker.nextNode()) marked.push(treeWalker.currentNode.parentNode);
    for (let i = 0; i < marked.length; i++) {
        marked[i].remove();
    }
}

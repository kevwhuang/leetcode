// 10011 - Text Highlighter

export function highlightText(node, text) {
    if (!text) return;
    text = text.toLowerCase();
    const filterFunc = node => node.textContent.toLowerCase().includes(text);
    const treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, filterFunc);
    const marked = [];
    while (treeWalker.nextNode()) marked.push(treeWalker.currentNode.parentNode);
    for (let i = 0; i < marked.length; i++) {
        const node = marked[i];
        const re = new RegExp(`(${text})`, 'ig');
        node.innerHTML = node.innerHTML.replace(re, '<mark>$1</mark>');
    }
}

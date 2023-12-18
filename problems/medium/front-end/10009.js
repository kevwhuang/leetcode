// 10009 - Add to Sorted List

export function addToSortedList(node, text) {
    const li = document.createElement('li');
    li.textContent = text;
    const len = node.children.length;
    if (len === 0) return node.appendChild(li);
    for (let i = 0; i < len; i++) {
        const cur = node.children[i].textContent;
        if (cur > text) return node.children[i].previousSibling.after(li);
        if (cur === text) return node.children[i].after(li);
    }
    return node.lastChild.after(li);
}

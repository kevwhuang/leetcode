// 10008 - Path to Node in DOM Tree

export function buildNodePath(node) {
    const path = [];
    while (node?.tagName) {
        path.push(node.tagName.toLowerCase());
        node = node.parentNode;
    }
    return node === document ? path.reverse() : [];
}

// 10029 - Get Next Right Sibling

export function getNextRightSibling(targetNode) {
    if (!targetNode) return null;
    let root = targetNode;
    while (root.parentElement) root = root.parentElement;
    let queue = [root];
    while (true) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node === targetNode) {
                return i === queue.length - 1 ? null : queue[i + 1];
            }
            for (const child of node.children) {
                if (child.nodeType === 1) newQueue.push(child);
            }
        }
        queue = newQueue;
    }
}

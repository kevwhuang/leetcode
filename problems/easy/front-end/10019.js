// 10019 - Add Image Data Source

export function addImgDataSrc(root) {
    for (const node of root.querySelectorAll('img')) {
        if (node.hasAttribute('src') || !node.hasAttribute('data-src')) continue;
        node.setAttribute('src', node.getAttribute('data-src'));
    }
}

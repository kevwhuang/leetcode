// 10020 - Match DOM Content

export function matchDomContent(node) {
    function action() {
        node.textContent = node.getAttribute('data-content') ?? '';
    }
    const config = {
        attributes: true,
        attributeFilter: ['data-content'],
    };
    new MutationObserver(action).observe(node, config);
}

// 10006 - Get Elements by Attribute

export function getElementsByAttribute(attributeValue) {
    function dfs(node) {
        if (node.getAttribute(attr) === val) elements.push(node);
        for (let i = 0; i < node.children.length; i++) {
            dfs(node.children[i]);
        }
    }
    const elements = [];
    const [attr, val] = attributeValue.split('=');
    dfs(document.body);
    return elements;
}

// 10030 - Files Tree View

import React from 'react';

export function TreeView({ items }) {
    function Tree({ items }) {
        return (
            <ul style={{ listStyle: 'none' }}>
                {items.map(item => <TreeItem item={item} />)}
            </ul>
        );
    }
    function TreeItem({ item }) {
        function handleClick() {
            if (expanded.has(item)) expanded.delete(item) && setCollapsed(true);
            else expanded.add(item) && setCollapsed(false);
        }
        const hasChildren = Boolean(item.children?.length);
        const [collapsed, setCollapsed] = React.useState(!expanded.has(item));
        return (
            <li>
                <span onClick={handleClick}>
                    {hasChildren && (collapsed ? '+' : '-')} {item.name}
                </span>
                {hasChildren && !collapsed && <Tree items={item.children} />}
            </li>
        );
    }
    const expanded = new WeakSet();
    return <Tree items={items} />;
}

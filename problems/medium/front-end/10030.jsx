// 10030 - Files Tree View

import React from 'react';

export function TreeView({ items }) {
    function Tree(props) {
        const { children, name } = props;
        const [collapsed, setCollapsed] = React.useState(true);
        const root = (
            <p onClick={() => setCollapsed(!collapsed)}>
                <span>{collapsed ? '+ ' : '- '}</span>
                {name}
            </p>
        );
        const contents = (
            <div>
                {children.map(({ children, name }) =>
                    children.length
                        ? <Tree name={name} children={children} />
                        : <p>{name}</p>
                )}
            </div>
        );
        return (
            <>
                {root}
                {collapsed ? null : contents}
            </>
        );
    }
    return (
        <div>
            {items.map(({ children, name }) =>
                children.length
                    ? <Tree name={name} children={children} />
                    : <p>{name}</p>
            )}
        </div>
    );
}

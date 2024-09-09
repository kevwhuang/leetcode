// 10028 - Sortable HTML Table

import React from 'react';

export function SortableTable({ data }) {
    function handleClick(e) {
        const key = e.target.textContent;
        const copy = structuredClone(table);
        let dir = 1;
        if (e.target.getAttribute('data-dir') === 'asc') {
            dir = -1;
            e.target.setAttribute('data-dir', 'desc');
        } else {
            e.target.setAttribute('data-dir', 'asc');
        }
        copy.sort((a, b) => a[key] === b[key] ? 0 : a[key] < b[key] ? dir : -dir);
        setTable(copy);
    }
    const sanitized = [];
    const keys = Object.keys(data[0]);
    for (const e of data) {
        for (const key of keys) {
            if (!e[key]) continue;
            sanitized.push(e);
            break;
        }
    }
    const [table, setTable] = React.useState(sanitized);
    return (
        <table>
            <thead>
                <tr>
                    {keys.map(key =>
                        <th data-dir="asc" onClick={handleClick}>
                            {key}
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {table.map(e =>
                    <tr>
                        {keys.map(key => <td>{e[key]}</td>)}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

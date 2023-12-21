// 10018 - Toggle List Selection

import React from 'react';

export function HandleItemSelection({ elements }) {
    function handleClick(e) {
        const copySelected = [...selected];
        if (copySelected.includes(e)) {
            copySelected.splice(copySelected.indexOf(e), 1);
        } else {
            copySelected.push(e);
        }
        if (copySelected.length === 4) copySelected.shift();
        setSelected(copySelected);
    }
    const [selected, setSelected] = React.useState([]);
    return (
        <ul>
            {elements.map(e =>
                <li
                    class={selected.includes(e) ? 'selected' : ''}
                    onClick={() => handleClick(e)}
                >
                    {e}
                </li>
            )}
        </ul>
    );
}

// 10016 - Auto Focus Switch

export function AutoFocusSwitch({ elements }) {
    function handleKeyDown(e, maxLength) {
        e.preventDefault();
        let chars = e.target.value;
        if (e.key === 'Backspace') {
            if (chars) {
                e.target.value = chars.slice(0, -1);
            } else {
                if (!e.target.previousSibling) return;
                chars = e.target.previousSibling.value;
                e.target.previousSibling.value = chars.slice(0, -1);
                e.target.previousSibling.focus();
            }
        } else if (e.key.match(/\d/)) {
            if (e.target.value.length < maxLength) {
                e.target.value = chars + e.key;
            }
            if (e.target.value.length === maxLength) {
                e.target.nextSibling?.focus();
            }
        }
    }
    return (
        <div>
            {elements.map(({ id, maxLength, type }) =>
                <input
                    id={id}
                    type={type}
                    onKeyDown={e => handleKeyDown(e, +maxLength)}
                />
            )}
        </div>
    );
}

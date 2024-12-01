// 10021 - Checkbox Group

export function CheckboxGroup({ name, options, onChange }) {
    function handleChange() {
        const checked = [...document.querySelectorAll('input:checked')];
        for (let i = 0; i < checked.length; i++) {
            checked[i] = checked[i].value;
        }
        onChange(checked);
    }
    return (
        <div>
            {options.map(({ label, value }) =>
                <label>
                    <input
                        name={name}
                        type="checkbox"
                        value={value}
                        onChange={handleChange}
                    />
                    {label}
                </label>
            )}
        </div>
    );
}

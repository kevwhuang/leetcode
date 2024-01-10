// 2618 - Check If Object Instance of Class

function checkIfInstanceOf(obj, classFunction) {
    return (obj !== undefined && obj !== null)
        && typeof classFunction === 'function'
        && Object(obj) instanceof classFunction;
}

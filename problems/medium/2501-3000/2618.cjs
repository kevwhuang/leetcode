// 2618 - Check If Object Instance of Class

function checkIfInstanceOf(obj, classFunction) {
    const cond1 = obj !== undefined && obj !== null;
    if (!cond1) return false;
    const cond2 = typeof classFunction === 'function';
    if (!cond2) return false;
    return Object(obj) instanceof classFunction;
}

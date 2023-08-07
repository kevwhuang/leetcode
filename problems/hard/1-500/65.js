// 65 - Valid Number

function isNumber(s) {
    if (s.includes('Infinity')) return false;
    return !isNaN(Number(s));
}

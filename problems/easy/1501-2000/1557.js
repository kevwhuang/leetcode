// 1556 - Thousand Separator

function thousandSeparator(n) {
    n = n.toString();
    let pos = n.length % 3,
        str = n.slice(0, pos);
    for (let i = 0; i < Math.floor(n.length / 3); i++) {
        str += '.' + n.slice(pos, pos + 3);
        pos += 3;
    }
    return str[0] === '.' ? str.slice(1) : str;
}

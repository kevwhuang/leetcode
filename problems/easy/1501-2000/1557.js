// 1556 - Thousand Separator

function thousandSeparator(n) {
    n = n.toString();
    let pos = n.length % 3, str = n.slice(0, pos);
    const bound = Math.floor(n.length / 3);
    for (let i = 0; i < bound; i++) {
        str += '.' + n.slice(pos, pos + 3);
        pos += 3;
    }
    return str[0] === '.' ? str.slice(1) : str;
}

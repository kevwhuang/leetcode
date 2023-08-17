// 868 - Binary Gap

function binaryGap(n) {
    n = n.toString(2);
    let gap = n.includes('11') ? 1 : 0;
    let i = 0;
    let length;
    while (i++ < n.length) {
        if (length && n[i] === '0') {
            length++;
        } else if (length && n[i] === '1') {
            gap = Math.max(length, gap);
            length = null;
        } else if (!length && n[i] === '0') {
            length = 2;
        }
    }
    return gap;
}

// 246 - Strobogrammatic Number

function isStrobogrammatic(num) {
    const banned = new Set(['2', '3', '4', '5', '7']);
    let l = -1, r = num.length;
    while (l++ <= r--) {
        if (banned.has(num[l]) || banned.has(num[r])) return false;
        if (num[l] === '6') {
            if (num[r] !== '9') return false;
        } else if (num[l] === '9') {
            if (num[r] !== '6') return false;
        } else if (num[l] !== num[r]) {
            return false;
        }
    }
    return true;
}

// 1056 - Confusing Number

function confusingNumber(n) {
    n = n.toString();
    const map = { 0: 0, 1: 1, 6: 9, 8: 8, 9: 6 };
    let diff = false;
    for (let i = 0, cur; i < n.length; i++) {
        cur = map[n[i]];
        if (cur === undefined) return false;
        if (!diff && cur != n[n.length - 1 - i]) diff = true;
    }
    return diff;
}

// 942 - DI String Match

function diStringMatch(s) {
    const perm = [];
    let left = 0,
        right = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I') perm.push(left++);
        else perm.push(right--);
    }
    perm.push(left);
    return perm;
}

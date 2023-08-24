// 1790 - Check If One String Swap Can Make Strings Equal

function areAlmostEqual(s1, s2) {
    const diff = [];
    for (let i = 0; i < s1.length; i++) {
        s1[i] !== s2[i] && diff.push(s1[i], s2[i]);
        if (diff.length > 4) return false;
    }
    if (diff.length === 0) return true;
    if (diff.length === 2) return false;
    return diff[0] === diff[3] && diff[1] === diff[2];
}

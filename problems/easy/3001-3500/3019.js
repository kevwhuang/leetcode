// 3019 - Number of Changing Keys

function countKeyChanges(s) {
    let count = 0, cur = s[0].toLowerCase();
    for (let i = 1; i < s.length; i++) {
        if (s[i].toLowerCase() === cur) continue;
        cur = s[i].toLowerCase();
        count++;
    }
    return count;
}

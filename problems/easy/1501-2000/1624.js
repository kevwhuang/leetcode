// 1624 - Largest Substring Between Two Equal Characters

function maxLengthBetweenEqualCharacters(s) {
    const obj = {};
    let max = -1;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) obj[s[i]] = i;
        else max = Math.max(i - obj[s[i]] - 1, max);
    }
    return max;
}

// 2609 - Find the Longest Balanced Substring of a Binary String

function findTheLongestBalancedSubstring(s) {
    let len = 0;
    for (let i = 0, count0 = 0, count1 = 0; i < s.length; i++) {
        if (s[i] === '0') {
            count0++;
            if (count1) count0 = 1;
            count1 = 0;
        } else {
            count1++;
            if (count1 > count0) continue;
            len = Math.max(count1 * 2, len);
        }
    }
    return len;
}

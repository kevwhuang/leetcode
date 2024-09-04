// 678 - Valid Parenthesis String

function checkValidString(s) {
    let left = 0, right = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') left++, right++;
        else if (s[i] === ')') left--, right--;
        else left--, right++;
        left = Math.max(0, left);
        if (right < 0) return false;
    }
    return left === 0;
}

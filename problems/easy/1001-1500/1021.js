// 1021 - Remove Outermost Parentheses

function removeOuterParentheses(s) {
    let [inner, res] = [-1, ''];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (inner++ !== -1) res += '(';
        } else if (inner-- !== 0) res += ')';
    }
    return res;
}

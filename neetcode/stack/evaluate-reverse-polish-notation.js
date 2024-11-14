// 150 - Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
    const S = [];
    for (let i = 0; i < tokens.length; i++) {
        const cur = tokens[i];
        if (cur === '+') S.push(S.pop() + S.pop());
        else if (cur === '-') S.push(-S.pop() + S.pop());
        else if (cur === '*') S.push(S.pop() * S.pop());
        else if (cur === '/') S.push(1 / (S.pop() / S.pop()) >> 0);
        else S.push(Number(cur));
    }
    return S[0];
}

module.exports = evalRPN;

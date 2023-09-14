// 150 - Evaluate Reverse Polish Notation

/**
 * @param {string[]} tokens
 * @return {number}
 */

function evalRPN(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') stack.push(stack.pop() + stack.pop());
        else if (tokens[i] === '-') stack.push(-stack.pop() + stack.pop());
        else if (tokens[i] === '*') stack.push(stack.pop() * stack.pop());
        else if (tokens[i] === '/') stack.push(Math.trunc(1 / (stack.pop() / stack.pop())));
        else stack.push(Number(tokens[i]));
    }
    return stack[0];
}

module.exports = evalRPN;

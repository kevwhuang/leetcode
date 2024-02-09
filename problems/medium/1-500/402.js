// 402 - Remove K Digits

function removeKdigits(num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        while (k && stack.length && num[i] < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    k++;
    while (--k) stack.pop();
    const index = stack.findIndex(e => e !== '0');
    if (index === -1) return '0';
    let res = '';
    for (let i = index; i < stack.length; i++) {
        res += stack[i];
    }
    return res;
}

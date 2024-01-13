// 2231 - Largest Number After Digit Swaps by Parity

function largestInteger(num) {
    num = num.toString().split('');
    const odds = [], evens = [];
    for (let i = 0; i < num.length; i++) {
        const cur = num[i];
        if (cur % 2) {
            odds.push(+cur);
            num[i] = true;
        } else {
            evens.push(+cur);
            num[i] = false;
        }
    }
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => b - a);
    for (let i = 0, j = 0, k = 0; i < num.length; i++) {
        num[i] = num[i] ? odds[j++] : evens[k++];
    }
    return parseInt(num.join(''));
}

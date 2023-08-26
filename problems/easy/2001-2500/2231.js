// 2231 - Largest Number After Digit Swaps by Parity

function largestInteger(num) {
    num = num.toString().split('');
    const odds = [];
    const evens = [];
    for (let i = 0, cur; i < num.length; i++) {
        cur = num[i];
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
    let pt_odds = 0;
    let pt_evens = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i]) num[i] = odds[pt_odds++];
        else num[i] = evens[pt_evens++];
    }
    return parseInt(num.join(''));
}

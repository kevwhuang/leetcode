// 2283 - Check if Number Has Equal Digit Count and Digit Value

function digitCount(num) {
    const freq = new Array(10).fill(0);
    for (let i = 0; i < num.length; i++) {
        freq[num[i]]++;
    }
    for (let i = 0; i < num.length; i++) {
        if (+num[i] !== freq[i]) return false;
    }
    return true;
}

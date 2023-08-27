// 2269 - Find the K-Beauty of a Number

function divisorSubstrings(num, k) {
    const str = num.toString();
    let beauty = 0;
    for (let i = 0, cur; i < str.length - k + 1; i++) {
        cur = parseInt(str.slice(i, i + k));
        num % cur === 0 && beauty++;
    }
    return beauty;
}

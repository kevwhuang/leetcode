// 1652 - Defuse the Bomb

function decrypt(code, k) {
    if (k === 0) return code.map(() => 0);
    let forward = true;
    if (k < 0) {
        forward = false;
        code.reverse();
        k *= -1;
    }
    const arr = new Array(code.length);
    let win = 0;
    for (let i = 0; i < k; i++) {
        win += code[i];
    }
    for (let i = 0, j = k - 1; i < code.length; i++) {
        j === code.length - 1 ? j = 0 : j++;
        win += code[j] - code[i];
        arr[i] = win;
    }
    return forward ? arr : arr.reverse();
}

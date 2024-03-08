// 650 - 2 Keys Keyboard

function minSteps(n) {
    let ops = 0, copy = 0, cur = 1;
    while (cur < n) {
        if (n % cur) {
            ops++;
            cur += copy;
        } else {
            ops += 2;
            copy = cur;
            cur += copy;
        }
    }
    return ops;
}

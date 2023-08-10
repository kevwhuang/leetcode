// 1869 - Longer Contiguous Segments of Ones Than Zeros

function checkZeroOnes(s) {
    let [current0, current1, longest0, longest1] = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 0) {
            current0++;
            longest1 = Math.max(current1, longest1);
            current1 = 0;
        } else {
            current1++;
            longest0 = Math.max(current0, longest0);
            current0 = 0;
        }
    }
    return Math.max(current1, longest1) > Math.max(current0, longest0);
}

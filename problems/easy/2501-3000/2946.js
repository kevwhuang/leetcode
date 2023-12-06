// 2946 - Matrix Similarity After Cyclic Shifts

function areSimilar(mat, k) {
    const m = mat.length, n = mat[0].length;
    const initEven = k % n;
    let initOdd = (n - k) % n;
    if (initOdd < 0) initOdd = n - initOdd - 1;
    for (let r = 0; r < m; r++) {
        for (let c = 0, cc = r % 2 ? initOdd : initEven; c < n; c++, cc++) {
            if (cc === n) cc = 0;
            if (mat[r][c] !== mat[r][cc]) return false;
        }
    }
    return true;
}

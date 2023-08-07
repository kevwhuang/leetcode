// 2643 - Row With Maximum Ones

function rowAndMaximumOnes(mat) {
    let row = 0,
        max = 0;
    for (let i = 0; i < mat.length; i++) {
        const current = mat[i];
        let count = 0;
        for (let j = 0; j < current.length; j++) {
            current[j] && count++;
        }
        if (count > max) {
            max = count;
            row = i;
        }
    }
    return [row, max];
}

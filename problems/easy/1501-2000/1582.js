// 1582 - Special Positions in a Binary Matrix

function numSpecial(mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        loop: for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                for (let y = i - 1; y >= 0; y--) {
                    if (mat[y][j] === 1) break loop;
                }
                for (let y = i + 1; y < mat.length; y++) {
                    if (mat[y][j] === 1) break loop;
                }
                for (let x = j - 1; x >= 0; x--) {
                    if (mat[i][x] === 1) break loop;
                }
                for (let x = j + 1; x < mat[0].length; x++) {
                    if (mat[i][x] === 1) break loop;
                }
                count++;
                break;
            }
        }
    }
    return count;
}

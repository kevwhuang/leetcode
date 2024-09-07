// 3044 - Most Frequent Prime

function mostFrequentPrime(mat) {
    function isPrime(num) {
        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    const m = mat.length, n = mat[0].length;
    const dirs = [
        [0, 1], [1, 1], [1, 0], [1, -1],
        [0, -1], [-1, -1], [-1, 0], [-1, 1],
    ];
    const map = new Map([[-1, 1]]);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            for (let i = 0; i < 8; i++) {
                let num = mat[r][c];
                let rr = r + dirs[i][0], cc = c + dirs[i][1];
                while (rr >= 0 && rr < m && cc >= 0 && cc < n) {
                    num = 10 * num + mat[rr][cc];
                    map.set(num, map.get(num) + 1 || 1);
                    rr += dirs[i][0];
                    cc += dirs[i][1];
                }
            }
        }
    }
    let res = -1;
    for (const num of map.keys()) {
        if (!isPrime(num)) continue;
        if (map.get(num) < map.get(res)) continue;
        if (map.get(num) > map.get(res)) res = num;
        else res = Math.max(num, res);
    }
    return res;
}

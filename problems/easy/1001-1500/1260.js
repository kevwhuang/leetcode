// 1260 - Shift 2D Grid

function shiftGrid(grid, k) {
    function rotateArr(arr, k) {
        function reverse(l, r) {
            while (l < r) [arr[l++], arr[r--]] = [arr[r], arr[l]];
        }
        k %= arr.length;
        reverse(0, arr.length - 1);
        reverse(0, k - 1);
        reverse(k, arr.length - 1);
        return arr;
    }
    const m = grid.length, n = grid[0].length;
    k %= m * n;
    if (k === 0) return grid;
    const arr = rotateArr(grid.flat(), k);
    let index = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            grid[i][j] = arr[index++];
        }
    }
    return grid;
}

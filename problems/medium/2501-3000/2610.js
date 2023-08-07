// 2610 - Convert an Array Into a 2D Array With Conditions

function findMatrix(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    const matrix = [];
    while (map.size) {
        const row = [];
        for (const e of map.entries()) {
            row.push(e[0]);
            if (e[1] > 1) map.set(e[0], e[1] - 1);
            else map.delete(e[0]);
        }
        matrix.push(row);
    }
    return matrix;
}

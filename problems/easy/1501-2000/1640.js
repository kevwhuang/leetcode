// 1640 - Check Array Formation Through Concatenation

function canFormArray(arr, pieces) {
    const map = new Map();
    for (let i = 0; i < pieces.length; i++) {
        map.set(pieces[i][0], pieces[i]);
    }
    for (let i = 0; i < arr.length;) {
        const nums = map.get(arr[i]);
        if (nums) {
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] !== arr[i]) return false;
                i++;
            }
        } else {
            return false;
        }
    }
    return true;
}

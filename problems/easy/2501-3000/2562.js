// 2562 - Find the Array Concatenation Value

function findTheArrayConcVal(nums) {
    let conc = 0;
    let left = -1;
    let right = nums.length;
    while (++left <= --right) {
        if (left === right) conc += nums[left];
        else conc += +(nums[left].toString() + nums[right]);
    }
    return conc;
}

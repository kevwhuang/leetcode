// 2475 - Number of Unequal Triplets in Array

function unequalTriplets(nums) {
    let triplets = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                nums[i] !== nums[j]
                    && nums[i] !== nums[k]
                    && nums[j] !== nums[k]
                    && triplets++;
            }
        }
    }
    return triplets;
}

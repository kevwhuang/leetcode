// 448 - Find All Numbers Disappeared in an Array

function findDisappearedNumbers(nums) {
    const res = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        res[i] = i + 1;
    }
    for (let i = 0; i < nums.length; i++) {
        delete res[nums[i] - 1];
    }
    return res.filter(Boolean);
}

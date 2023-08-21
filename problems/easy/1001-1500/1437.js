// 1437 - Check If All 1's Are at Least Length K Places Away

function kLengthApart(nums, k) {
    let lastSeen = nums.indexOf(1);
    if (k === 0 || lastSeen === -1) return true;
    for (let i = lastSeen + 1; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i - lastSeen - 1 < k) return false;
            lastSeen = i;
        }
    }
    return true;
}

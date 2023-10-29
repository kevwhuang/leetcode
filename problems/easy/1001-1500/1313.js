// 1313 - Decompress Run-Length Encoded List

function decompressRLElist(nums) {
    const list = [];
    for (let i = 0; i < nums.length; i += 2) {
        const val = nums[i + 1];
        let freq = nums[i];
        while (freq > 0) {
            list.push(val);
            freq--;
        }
    }
    return list;
}

// 1588 - Sum of All Odd Length Subarrays

function sumOddLengthSubarrays(arr) {
    let sum = 0;
    let window = 1;
    while (window <= arr.length) {
        for (let i = 0; i <= arr.length - window; i++) {
            for (let j = i; j < i + window; j++) {
                sum += arr[j];
            }
        }
        window += 2;
    }
    return sum;
}

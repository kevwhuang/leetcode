// 1796 - Second Largest Digit in a String

function secondHighest(s) {
    let largest = -1, secondLargest = -1;
    for (let i = 0; i < s.length; i++) {
        const num = Number(s.charAt(i));
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (secondLargest < num && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

// 2108 - Find First Palindromic String in the Array

function firstPalindrome(words) {
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let left = 0,
            right = word.length - 1;
        while (left <= right) {
            if (word[left++] !== word[right--]) break;
            if (left > right) return word;
        }
    }
    return '';
}

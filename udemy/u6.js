// 6 - Multiple Pointers - isSubsequence

function isSubsequence(str1, str2) {
    for (let i = 0, j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) i++;
        if (i === str1.length) return true;
    }
    return false;
}

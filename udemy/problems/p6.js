// 6 - Multiple Pointers

function isSubsequence(str1, str2) {
    for (let pt1 = 0, pt2 = 0; pt2 < str2.length; pt2++) {
        str1[pt1] === str2[pt2] && pt1++;
        if (pt1 === str1.length) return true;
    }
    return false;
}

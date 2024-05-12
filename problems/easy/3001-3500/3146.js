// 3146 - Permutation Difference Between Two Strings

function findPermutationDifference(s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }
    let diff = 0;
    for (let i = 0; i < t.length; i++) {
        diff += Math.abs(i - map.get(t[i]));
    }
    return diff;
}

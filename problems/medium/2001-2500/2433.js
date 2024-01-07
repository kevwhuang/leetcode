// 2433 - Find the Original Array of Prefix XOR

function findArray(pref) {
    const res = [pref[0]];
    for (let i = 1; i < pref.length; i++) {
        res[i] = pref[i - 1] ^ pref[i];
    }
    return res;
}

// 2433 - Find the Original Array of Prefix Xor

function findArray(pref) {
    const arr = [pref[0]];
    for (let i = 1; i < pref.length; i++) {
        arr[i] = pref[i] ^ pref[i - 1];
    }
    return arr;
}

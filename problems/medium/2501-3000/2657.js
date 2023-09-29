// 2657 - Find the Prefix Common Array of Two Arrays

function findThePrefixCommonArray(A, B) {
    const C = new Array(A.length);
    const set = new Set();
    for (let i = 0, count = 0; i < A.length; i++) {
        set.has(A[i]) && count++;
        set.add(A[i]);
        set.has(B[i]) && count++;
        set.add(B[i]);
        C[i] = count;
    }
    return C;
}

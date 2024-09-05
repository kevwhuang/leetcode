// 3109 - Find the Index of Permutation

function getPermutationIndex(perm) {
    const n = perm.length, tree = new Uint32Array(n + 1);
    let idx = 0, fact = 1, i = n;
    while (~--i) {
        let sum = 0, j = perm[i] - 1;
        while (j) sum += tree[j], j -= j & -j;
        fact = (fact * (n - i - 1) || 1) % 1000000007;
        idx = (idx + fact * sum) % 1000000007;
        j = perm[i];
        while (j < tree.length) tree[j]++, j += j & -j;
    }
    return idx;
}

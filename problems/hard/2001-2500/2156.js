// 2156 - Find Substring With Given Hash Value

function subStrHash(s, power, modulo, k, hashValue) {
    const key = i => BigInt(s.charCodeAt(i) - 96);
    a = BigInt(power), mod = BigInt(modulo), tgt = BigInt(hashValue);
    let res, hash = 0n, pow = 1n;
    for (let i = s.length - k + 1; i < s.length; i++) {
        pow = a * pow % mod;
        hash = (hash + pow * key(i)) % mod;
    }
    for (let i = s.length - k; ~i; i--) {
        hash = (hash + key(i)) % mod;
        if (hash === tgt) res = i;
        hash = a * (hash + mod - pow * key(i + k - 1) % mod) % mod;
    }
    return s.slice(res, res + k);
}

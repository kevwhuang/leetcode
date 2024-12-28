// 2156 - Find Substring With Given Hash Value

function subStrHash(s, power, modulo, k, hashValue) {
    const id = i => BigInt(s.charCodeAt(i) - 96);
    a = BigInt(power), mod = BigInt(modulo), tgt = BigInt(hashValue);
    let res, hash = 0n, pow = 1n;
    for (let i = s.length - k + 1; i < s.length; i++) {
        pow = a * pow % mod;
        hash = (hash + pow * id(i)) % mod;
    }
    for (let i = s.length - k; ~i; i--) {
        hash = (hash + id(i)) % mod;
        if (hash === tgt) res = i;
        hash = a * (hash + mod - pow * id(i + k - 1) % mod) % mod;
    }
    return s.slice(res, res + k);
}

// 2351 - First Letter to Appear Twice

function repeatedCharacter(s) {
    const set = new Set();
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (set.has(current)) return current;
        set.add(current);
    }
}

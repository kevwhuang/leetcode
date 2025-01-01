// 1189 - Maximum Number of Balloons

function maxNumberOfBalloons(text) {
    const freqs = new Map();
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!'balon'.includes(char)) continue;
        freqs.set(char, freqs.get(char) + 1 || 1);
    }
    if (freqs.size < 5) return 0;
    freqs.set('l', freqs.get('l') >> 1);
    freqs.set('o', freqs.get('o') >> 1);
    return Math.min(...freqs.values());
}

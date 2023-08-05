// 1189 - Maximum Number of Balloons

function maxNumberOfBalloons(text) {
    const freq = new Map();
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if ('balon'.includes(char)) {
            freq.set(char, freq.get(char) + 1 || 1);
        }
    }
    if (freq.size < 5) return 0;
    freq.set('l', Math.floor(freq.get('l') / 2));
    freq.set('o', Math.floor(freq.get('o') / 2));
    return Math.min.apply(null, [...freq.values()]);
}

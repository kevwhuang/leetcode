// 914 - X of a Kind in a Deck of Cards

function hasGroupsSizeX(deck) {
    if (deck.length < 2) return false;
    const map = new Map();
    for (let i = 0; i < deck.length; i++) {
        map.set(deck[i], map.get(deck[i]) + 1 || 1);
    }
    const values = [...map.values()];
    const partition = Math.min.apply(null, values);
    if (partition === 1) return false;
    loop: for (let factor = 2; factor <= partition; factor++) {
        if (partition % factor) continue;
        for (let i = 0; i < values.length; i++) {
            if (values[i] % factor) continue loop;
        }
        return true;
    }
    return false;
}

// 1974 - Minimum Time to Type Word Using Special Typewriter

function minTimeToType(word) {
    let pos = 97,
        time = word.length;
    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        let moves = Math.abs(code - pos);
        if (moves > 13) moves = 26 - moves;
        pos = code;
        time += moves;
    }
    return time;
}

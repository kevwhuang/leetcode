// 3016 - Minimum Number of Pushes to Type Word II

function minimumPushes(word) {
    const freqs = Array.from({ length: 26 }, (_, i) => [i, 0]);
    for (let i = 0; i < word.length; i++) {
        freqs[word.charCodeAt(i) - 97][1]++;
    }
    freqs.sort((a, b) => b[1] - a[1]);
    const arr = new Array(26);
    for (let i = 0, inc = 1; i < 26; i++) {
        arr[freqs[i][0]] = inc;
        if ((i + 1) % 8 === 0) inc++;
    }
    let pushes = 0;
    for (let i = 0; i < word.length; i++) {
        pushes += arr[word.charCodeAt(i) - 97];
    }
    return pushes;
}

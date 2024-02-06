// 3014 - Minimum Number of Pushes to Type Word I

function minimumPushes(word) {
    let pushes = 0;
    for (let i = 0, inc = 1; i < word.length; i++) {
        pushes += inc;
        if ((i + 1) % 8 === 0) inc++;
    }
    return pushes;
}

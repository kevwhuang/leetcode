// 2399 - Check Distances Between Same Letters

function checkDistances(s, distance) {
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(i + 97);
        const space = s.lastIndexOf(letter) - s.indexOf(letter) - 1;
        if (space !== -1 && space !== distance[i]) return false;
    }
    return true;
}

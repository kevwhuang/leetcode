// 383 - Ransom Note

function canConstruct(ransomNote, magazine) {
    const map = new Map();
    for (const letter of magazine) {
        map.set(letter, map.get(letter) + 1 || 1);
    }
    for (const letter of ransomNote) {
        if (!map.get(letter)) return false;
        map.set(letter, map.get(letter) - 1);
    }
    return true;
}

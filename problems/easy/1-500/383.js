// 383 - Ransom Note

function canConstruct(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const B = new Uint32Array(26);
    for (let i = 0; i < magazine.length; i++) {
        B[magazine.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (B[ransomNote.charCodeAt(i) - 97]-- === 0) return false;
    }
    return true;
}

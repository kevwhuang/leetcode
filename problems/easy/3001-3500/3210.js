// 3210 - Find the Encrypted String

function getEncryptedString(s, k) {
    let encrypted = '';
    const len = s.length;
    for (let i = 0; i < len; i++) {
        encrypted += s[(i + k) % len];
    }
    return encrypted;
}

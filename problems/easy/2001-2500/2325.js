// 2325 - Decode the Message

function decodeMessage(key, message) {
    const cipher = new Map([[' ', ' ']]);
    for (let i = 0, code = 97; i < key.length; i++) {
        if (cipher.has(key[i])) continue;
        cipher.set(key[i], String.fromCharCode(code++));
        if (code === 123) break;
    }
    let decoded = '';
    for (let i = 0; i < message.length; i++) {
        decoded += cipher.get(message[i]);
    }
    return decoded;
}

// 2325 - Decode the Message

function decodeMessage(key, message) {
    const cipher = new Map([[' ', ' ']]);
    let charCode = 97;
    for (let i = 0; i < key.length; i++) {
        if (!cipher.has(key[i])) {
            cipher.set(key[i], String.fromCharCode(charCode++));
            if (charCode === 123) break;
        }
    }
    let decoded = '';
    for (let i = 0; i < message.length; i++) {
        decoded += cipher.get(message[i]);
    }
    return decoded;
}

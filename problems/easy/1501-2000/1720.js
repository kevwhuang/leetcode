// 1720 - Decode XORed Array

function decode(encoded, first) {
    const decoded = [first];
    for (let i = 0; i < encoded.length; i++) {
        decoded.push(decoded[i] ^ encoded[i]);
    }
    return decoded;
}

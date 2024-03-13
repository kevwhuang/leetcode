// 271 - Encode and Decode Strings

function encode(strs) {
    return strs.join('<delim>');
}

function decode(s) {
    return s.split('<delim>');
}

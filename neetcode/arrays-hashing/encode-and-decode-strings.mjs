// 271 - Encode and Decode Strings

/**
 * @param {string[]} strs
 * @return {string}
 */

function encode(strs) {
    return strs.join('<delim>');
}

/**
 * @param {string} s
 * @return {string[]}
 */

function decode(s) {
    return s.split('<delim>');
}

module.exports = { encode, decode };

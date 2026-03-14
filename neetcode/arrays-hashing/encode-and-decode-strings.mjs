// 271 - Encode and Decode Strings

/**
 * @param {string[]} strs
 * @return {string}
 */

function encode(strs) {
    return strs.join`<~>`;
}

/**
 * @param {string} s
 * @return {string[]}
 */

function decode(s) {
    return s.split`<~>`;
}

module.exports = { encode, decode };

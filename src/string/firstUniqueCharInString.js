// https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * Finds the first unique character in the given string.
 * @param  {string} str input string
 * @returns {number} index of the first unique character, otherwise -1.
 */
const firstUniqueCharInString = (str) => {
    let table = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < str.length; i++) {
        table[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (table[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            return i;
        }
    }
    return -1;
};

module.exports = firstUniqueCharInString;
// https://leetcode.com/problems/permutation-in-string/

/**
 * @param  {string} s1 pattern to search in next string
 * @param  {string} s2 the string where permutation of pattern is searched
 * @return {boolean} true if pattern is there, else false
 */
const permutationInString = (s1, s2) => {
    let map = new Map();
    for (let ch of s1) {
        if (!map.has(ch)) {
            map.set(ch, 0);
        }
        map.set(ch, map.get(ch) + 1);
    }
    let start = 0;
    let matchCount = 0;
    for (let end = 0; end < s2.length; end++) {
        if (map.has(s2[end])) {
            map.set(s2[end], map.get(s2[end]) - 1);
            if (map.get(s2[end]) === 0) {
                matchCount++;
            }
            if (matchCount === map.size) {
                return true;
            }
        }
        if (end >= s1.length - 1) {
            if (map.has(s2[start])) {
                let count = map.get(s2[start]);
                if (count === 0) {
                    matchCount--;
                }
                map.set(s2[start], count + 1);
            }
            start++;
        }
    }
    return false;
};

module.exports = permutationInString;
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    if (s.length === 0) {
        return 0;
    }
    let map = new Map();
    let i = 0;
    let j = 0;
    let max = 1;
    while (i < s.length) {
        if (map.has(s[i])) {
            j = Math.max(j, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - j + 1);

        i++;
    }
    return max;
};

module.exports = lengthOfLongestSubstring;
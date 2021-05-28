/**
 * Find longest substring with k distinct characters
 * @param  {string} str input string
 * @param  {number} k number of distinct characters
 * @return {number} max length of substring
 */
const longestSubstrWithKDistinctChars = (str, k) => {
    let start = 0;
    let end = 0;
    let maxLength = Number.NEGATIVE_INFINITY;
    let map = new Map();
    while (end < str.length) {
        if (!map.has(str[end])) {
            map.set(str[end], 0);
        }
        map.set(str[end], map.get(str[end]) + 1);
        while (map.size > k) {
            let count = map.get(str[start]);
            if (count - 1 === 0) {
                map.delete(str[start]);
            } else {
                map.set(str[end], count - 1);
            }
            start++;
        }
        if (map.size === k) {
            maxLength = Math.max(maxLength, end - start + 1);
        }
        end++;
    }
    return maxLength;
};

module.exports = longestSubstrWithKDistinctChars;
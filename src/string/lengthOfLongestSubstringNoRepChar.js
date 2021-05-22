// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Finds longest substring without repeating characters
 * @param {string} s input string
 * @return {number} max substring length without any repeating characters
 */
const lengthOfLongestSubstringNoRepChar = (s) => {
    if (s.length === 0) {
        return 0;
    }
    let map = new Map();
    let start = 0;
    let end = 0;
    let maxLength = Number.NEGATIVE_INFINITY;
    while (end < s.length) {
        if (map.has(s[end])) {
            // find where we have seen this earlier.
            let prevPlace = map.get(s[end]);
            // update the current position
            map.set(s[end], end);
            // if start is greater than previous place+1 
            // then don't go back. Otherwise reduce the window by moving start to
            // next place of previously seen place
            start = Math.max(prevPlace + 1, start);
        } else {
            map.set(s[end], end);
        }
        maxLength = Math.max(maxLength, end - start + 1);
        end++;
    }
    return maxLength;
};

module.exports = lengthOfLongestSubstringNoRepChar;
// https://leetcode.com/problems/longest-repeating-character-replacement/

const longestSubstringAfterReplacement = (s, k) => {
    let start = 0;
    let repeatCount = 0;
    let map = new Map();
    let maxLength = Number.NEGATIVE_INFINITY;
    for (let end = 0; end < s.length; end++) {
        if (!map.has(s[end])) {
            map.set(s[end], 0);
        }
        map.set(s[end], map.get(s[end]) + 1);
        repeatCount=Math.max(repeatCount,map.get(s[end]));
        if (end - start + 1 - repeatCount > k) {
            map.set(s[start], map.get(s[start]) - 1);
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};

module.exports = longestSubstringAfterReplacement;
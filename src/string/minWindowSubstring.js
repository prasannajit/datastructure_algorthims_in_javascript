// https://leetcode.com/problems/minimum-window-substring/

const minWindowSubstring = (s, t) => {
    let m = new Map();
    for (let ch of t) {
        if (m.has(ch)) {
            m.set(ch, m.get(ch) + 1);
        } else {
            m.set(ch, 1);
        }
    }
    // counter represents the number of chars of t to be found in s.
    let start = 0, end = 0, counter = t.length, minStart = 0, minLen = Number.MAX_SAFE_INTEGER;
    let size = s.length;

    // Move end to find a valid window.
    while (end < size) {
        // If char in s exists in t, decrease counter
        if (m.has(s[end]) && m.get(s[end]) > 0) {
            counter--;
        }
        // Decrease m[s[end]]. If char does not exist in t, m[s[end]] will be negative.
        if (m.has(s[end])) {
            m.set(s[end], m.get(s[end]) - 1);
        }
        end++;
        // When we found a valid window, move start to find smaller window.
        while (counter === 0) {
            if (end - start < minLen) {
                minStart = start;
                minLen = end - start;
            }
            if (m.has(s[start])) {
                m.set(s[start], m.get(s[start]) + 1);
            }
            // When char exists in t, increase counter.
            if (m.has(s[start]) && m.get(s[start]) > 0) {
                counter++;
            }
            start++;
        }
    }
    if (minLen != Number.MAX_SAFE_INTEGER)
        return s.substr(minStart, minLen);
    return "";
}

module.exports = minWindowSubstring;
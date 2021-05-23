/**
 * @param  {} str
 * @param  {} pattern
 */
const findAnagramsOfPattern = (str, pattern) => {
    let map = new Map();
    for (ch of pattern) {
        if (!(map.has(ch))) {
            map.set(ch, 0);
        }
        map.set(ch, map.get(ch) + 1);
    }
    let start = 0;
    let matchCount = 0;
    let result = [];
    for (let end = 0; end < str.length; end++) {
        if (map.has(str[end])) {
            map.set(str[end], map.get(str[end]) - 1);
            if (map.get(str[end]) === 0) {
                matchCount++;
            }
        }
        if (matchCount === map.size) {
            result.push(start);
        }
        if (end >= pattern.length - 1) {
            if (map.has(str[start])) {
                if (map.get(str[start]) === 0) {
                    matchCount -= 1;
                }
                map.set(str[start], map.get(str[start]) + 1)
            }
            start += 1;
        }
    }
    return result;
};

module.exports = findAnagramsOfPattern;
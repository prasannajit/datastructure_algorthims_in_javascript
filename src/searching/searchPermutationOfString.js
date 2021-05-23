const searchPermutationOfString = function (str, pattern) {
    let map = new Map();
    for (let ch of pattern) {
        if (!map.has(ch)) {
            map.set(ch, 0);
        }
        map.set(ch, map.get(ch) + 1);
    }
    let start = 0;
    let end = 0;
    while (end < str.length) {
        if (map.size === 0) {
            return true;
        }
        if (!map.has(str[end])) {
            while (start !== end) {
                if (!map.has(str[start])) {
                    map.set(str[start], 0);
                }
                map.set(str[start], map.get(str[start]) + 1);
                start++;
            }
            if (!map.has(str[end])) {
                start++;
                end++;
            }
        } else {
            let count = map.get(str[end]);
            if (count - 1 === 0) {
                map.delete(str[end]);
            } else {
                map.set(str[end], map.get(str[end]) - 1);
            }
            end++;
        }
    }
    if (map.size === 0) {
        return true;
    }
    return false;
};

module.exports = searchPermutationOfString;
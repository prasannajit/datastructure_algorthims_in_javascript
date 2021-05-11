const validAnagram_1 = (s, t) => {
    let map = new Map();
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let count = map.get(s[i]);
            count += 1;
            map.set(s[i], count);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            let count = map.get(t[i]);
            count -= 1;
            if (count === 0) {
                map.delete(t[i]);
            } else {
                map.set(t[i], count);
            }

        } else {
            return false;
        }
    }
    if (map.size > 0) {
        return false;
    }
    return true;
};

const validAnagram_2 = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    let table = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < s.length; i++) {
        table[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        table[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] -= 1;
    }
    for (let i = 0; i < table.length; i++) {
        if (table[i] !== 0) {
            return false;
        }
    }
    return true;
}

module.exports = { validAnagram_1, validAnagram_2 };
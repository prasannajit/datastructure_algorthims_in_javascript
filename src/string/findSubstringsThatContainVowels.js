// https://www.geeksforgeeks.org/find-substrings-contain-vowels/


const findSubstringsThatContainVowels = (str) => {
    const isVowel = (ch) => {
        return (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u');
    };
    let set = new Set();
    let start = 0;
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            set.add(str[i]);
            if (set.size === 5) {
                result.push(str.substring(start, i + 1));
            }
        } else {
            start = i + 1;
            set.clear();
        }
    }
    return result;
};

module.exports = findSubstringsThatContainVowels;
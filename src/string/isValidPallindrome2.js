const isValidPallindrome2 = (s) => {
    const helper = (s, i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return helper(s, i + 1, j) || helper(s, i, j - 1);
        }
        i++;
        j--;
    }
    return true;
};

module.exports = isValidPallindrome2;
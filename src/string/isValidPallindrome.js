// https://leetcode.com/problems/valid-palindrome/

/**
 * Checks if a string is pallindrome or not.
 * Ignore all non numeric and alphabetic characters.
 * @param  {string} str
 * @returns {boolean} return true if valid pallindrome; otherwise false.
 */
const isValidPallindrome = (str) => {
    let start = 0;
    let end = str.length - 1;
    while (true) {
        if (start > end) {
            return true;
        }
        while (true) {
            if (/[0-9a-zA-Z]/.test(str[start]) === false) {
                start++;
            } else {
                break;
            }
        }
        while (true) {
            if (/[0-9a-zA-Z]/.test(str[end]) === false) {
                end--;
            } else {
                break;
            }
        }
        if (start <= end) {
            if (str[start].toLowerCase() !== str[end].toLowerCase()) {
                return false;
            }
        } else {
            return true;
        }
        start++;
        end--;
    }
};

module.exports = isValidPallindrome;
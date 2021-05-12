// https://leetcode.com/problems/valid-parentheses/

/**
 * Checks if the parenthesis are in order
 * @param {string} s input string with only ()[]{} characters
 * @return {boolean} if valid returns true else false
 */
var isValid = function (s) {
    if (s.length <= 1) {
        return false;
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        }
        else if (s[i] === '[') {
            stack.push(']');
        }
        else if (s[i] === '{') {
            stack.push('}');
        }
        else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            let item = stack.pop();
            if (item !== s[i]) {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
};

module.exports = isValid;
// https://leetcode.com/problems/plus-one/
/**
 * Adds one to the number presented as an array,
 * with MSB at the beginning od the array.
 * @param {number[]} digits array that represents a number
 * @return {number[]}
 */
const plusOne = (digits) => {
    let next = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + next > 9) {
            digits[i] = 0;
            next = 1;
        } else {
            digits[i] += next;
            next = 0;
        }
    }
    if (next === 1) {
        digits.unshift(1);
    }
    return digits;
};

module.exports = plusOne;
// https://leetcode.com/problems/reverse-integer/
/**
 * Reverses a integer, if integer value goes beyond
 * the range after reversal, returns 0
 * @param  {number} x integer input
 */
const reverseInteger_1 = (x) => {
    let arr = [];
    let multiplier = 1;
    if (x < 0) {
        multiplier = -1;
    }
    x = Math.abs(x);
    while (x !== 0) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }
    let sum = 0;
    let power = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * (10 ** power);
        power--;
    }
    let ans = multiplier * sum;
    if (ans > (2 ** 31) - 1 || ans < -(2 ** 31)) {
        return 0;
    }
    return ans;
};
/**
 * Reverses without extra space
 */
const reverseInteger_2 = (x) => {
    const sign = (x < 0)
    x = Math.abs(x);
    reverseNum = 0;
    while (x) {
        reverseNum = reverseNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (reverseNum > (2 ** 31) - 1 || reverseNum < -(2 ** 31)) {
        return 0;
    }
    return sign ? -reverseNum : reverseNum;
};

module.exports = { reverseInteger_1, reverseInteger_2 };


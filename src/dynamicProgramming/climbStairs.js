// https://leetcode.com/problems/climbing-stairs/

/**
 * Calculates number of different ways we can climb n stairs;
 * assuming we can only climb 1 or 2 stairs at once
 * @param {number} n number of stairs to climb
 * @return {number} number of ways to climb
 */
const climbStairs = (n) => {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let level = [1, 2];
    for (i = 2; i < n; i++) {
        level[i] = level[i - 1] + level[i - 2];
    }
    return level[n - 1];
};

module.exports = climbStairs;
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
    if (!s || s.length === 0) {
        return 0;
    }
    let n = s.length;
    let dp = Array.from({ length: n }, () => 0);
    dp[0] = s[0] !== '0' ? 1 : 0;
    for (let i = 1; i < n; i++) {
        let first = parseInt(s.substring(i, i + 1));
        let second = parseInt(s.substring(i - 1, i + 1));
        if (first >= 1 && first <= 9) {
            dp[i] += dp[i - 1];
        }
        if (second >= 10 && second <= 26) {
            dp[i] += (i >= 2 ? dp[i - 2] : 1);
        }
    }
    return dp[dp.length - 1];
};

module.exports = numDecodings;
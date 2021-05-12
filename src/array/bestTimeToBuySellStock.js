// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const bestTimeToBuyAndSellStock = (prices) => {
    if (prices.length < 2) {
        return 0;
    }
    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - min);
        }
    }
    return profit;
};

module.exports = bestTimeToBuyAndSellStock;
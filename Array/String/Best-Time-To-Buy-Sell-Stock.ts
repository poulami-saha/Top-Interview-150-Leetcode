// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
function maxProfit(prices: number[]): number {
    let buy = prices[0];
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i]
        } else if (prices[i] - buy > maxProfit) {
            maxProfit = prices[i] - buy;
        }
    }
    return maxProfit
}
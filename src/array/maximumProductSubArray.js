// https://leetcode.com/problems/maximum-product-subarray/
/**
 * Finds max product of a subarray of given array
 * @param  {number[]} nums
 * @return {number} max product subarray
 */
const maximumProductSubArray_1 = (nums) => {
    let max = nums[0];
    let min = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // swap as when the next number is negative
        // multiplied by min value would make thr product larger
        if (nums[i] < 0) {
            [max, min] = [min, max];
        }
        max = Math.max(max * nums[i], nums[i]);
        min = Math.min(min * nums[i], nums[i]);
        ans = Math.max(max, ans);
    }
    return ans;
};

/**
 * Without an swapping of max and min
 */
const maximumProductSubArray_2 = (nums) => {
    let max = nums[0];
    let min = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // store tha max as it will be later used in min calculation
        // as max is getting updated in max calculation step
        let previousMax = max;
        max = Math.max(max * nums[i], min * nums[i], nums[i]);
        min = Math.min(previousMax * nums[i], min * nums[i], nums[i]);
        ans = Math.max(max, ans);
    }
    return ans;
};

/**
 * O(n2) solution, finding all subarrays and finding the max product
 */
const maximumProductSubArray_3 = (nums) => {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (let j = i; j < nums.length; j++) {
            prod *= nums[j];
            max = Math.max(max, prod, nums[j]);
        }
    }
    return max;
};

module.exports = { maximumProductSubArray_1, maximumProductSubArray_2, maximumProductSubArray_3 };
// https://leetcode.com/problems/product-of-array-except-self/
/**
 * Find product of all elements except the same element.
 * @param  {number[]} nums input array
 * @returns {number[]} product array
 */
// O(n2) solution
const productExceptSelf_1 = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j === i) {
                continue;
            }
            product *= nums[j];
        }
        result.push(product);
    }
    return result;
};

/**
 * O(n) solutions with O(n) space
 */
const productExceptSelf_2 = (nums) => {
    let result = [];
    let mapL = new Map();
    let mapR = new Map();
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
        mapL.set(i, product);
    }
    console.log(mapL);
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        product *= nums[i];
        mapR.set(i, product);
    }
    console.log(mapR);
    for (let i = 0; i < nums.length; i++) {
        let res = 1;
        if (i - 1 >= 0) {
            res *= mapL.get(i - 1);
        }
        if (i + 1 <= nums.length - 1) {
            res *= mapR.get(i + 1);
        }
        result.push(res);
    }
    return result;
};

/**
 * arr=[2,3,4,5]
 * [1,2,6,24] left
 * [60,20,5,1] right
 * [60,40,30,24] result
 * O(n) with O(1) space
 */
const productExceptSelf_3 = (nums) => {
    let result = Array.from({ length: nums.length }, () => 1);
    let left = 1;
    for (let i = 1; i < nums.length; i++) {
        left = left * nums[i - 1];
        result[i] = left;
    }
    console.log(result);
    let right = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right = right * nums[i + 1];
        result[i] *= right;
    }
    return result;
};

module.exports = { productExceptSelf_1, productExceptSelf_2, productExceptSelf_3 };
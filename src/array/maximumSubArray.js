/**
 * Finds maximum subarray. Uses a O(n2) solution to find
 * all possible sumarrays and their sum.
 * @param  {Array} arr list of numbers with positive,0 and negative numbers
 * @return {number} sum of maximum subarray
 */
const maximumSubArray_1 = (arr) => {
    if (arr.length === 0) {
        return;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    let finalResult = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            finalResult = Math.max(finalResult, sum);
        }
    }
    return finalResult;
};

/**
 * Finds the maximum subarray (Kadane's algorithm).
 * Time complexity is O(n).
 */
const maximumSubArray_2 = (arr) => {
    if (arr.length === 0) {
        return;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    let sum = arr[0];
    let sumTillThisElem = arr[0];
    for (let i = 1; i < arr.length; i++) {
        // If the current number is more than the previous sum,
        // then use that as max sum till that element
        sumTillThisElem = Math.max(sumTillThisElem + arr[i], arr[i]);
        sum = Math.max(sum, sumTillThisElem);
    }
    return sum;
};

module.exports = { maximumSubArray_1, maximumSubArray_2 };
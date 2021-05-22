/**
 * Finds maximum sum subarray of length k
 * @param  {number[]} arr input array of numbers
 * @param  {number} k length of subarray
 * @return {number} max subarray sum of size k
 */
const maxSumSubArraySizeK = (arr, k) => {
    let resultIndex=[];
    let wStart = 0, wEnd = 0, wSum = 0, maxSum = Number.NEGATIVE_INFINITY;
    while (wEnd < arr.length) {
        wSum += arr[wEnd];
        if (wEnd >= k - 1) {
            if(wSum>maxSum){
                maxSum = wSum;
                resultIndex=[wStart,wEnd];
            }
            wSum -= arr[wStart];
            wStart++;
        }
        wEnd++;
    }
    return arr.slice(resultIndex[0],resultIndex[1]+1);
};

module.exports = maxSumSubArraySizeK;
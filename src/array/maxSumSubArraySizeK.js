const maxSumSubArraySizeK = (arr, k) => {
    let wStart = 0, wEnd = 0, wSum = 0, maxSum = Number.NEGATIVE_INFINITY;
    while (wEnd < arr.length) {
        wSum += arr[wEnd];
        if (wEnd >= k - 1) {
            maxSum = Math.max(wSum, maxSum);
            wSum -= arr[wStart];
            wStart++;
        }
        wEnd++;
    }
    return maxSum;
};

module.exports = maxSumSubArraySizeK;
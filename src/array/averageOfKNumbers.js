// sliding window pattern
/**
 * Finds average of all consecutive subarrays of length k
 * @param  {number[]} arr input list of numbers
 * @return {number[]} array of averages
 */
const averageOfKNumbers = (arr, k) => {
    // Solution 1
    // let result = [];
    // let initialSum = 0;
    // for (let i = 0; i < k; i++) {
    //     initialSum += arr[i];
    // }
    // result.push((initialSum / k).toFixed(2));
    // for (i = 1; i <= arr.length - k; i++) {
    //     initialSum -= arr[i - 1];
    //     initialSum += arr[i + k - 1];
    //     result.push((initialSum / k).toFixed(2));
    // }
    // return result

    // solution 2
    let result = [];
    let start = 0;
    let end = 0;
    let sum = 0;
    while (end < arr.length) {
        sum += arr[end];
        if (end >= k - 1) {
            result.push(sum / k);
            sum -= arr[start];
            start++;
        }
        end++;
    }
    return result;
};

module.exports = averageOfKNumbers;
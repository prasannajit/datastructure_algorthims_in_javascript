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
    let wSum = 0;
    let wStart = 0;
    let wEnd = 0;
    while (wEnd < arr.length) {
        wSum += arr[wEnd];
        if (wEnd >= k-1) {
            result.push((wSum / k).toFixed(2));
            wSum-=arr[wStart];
            wStart+=1;
        }
        wEnd+=1;
    }
    return result;
};

module.exports = averageOfKNumbers;
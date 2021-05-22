/**
 * @param  {} arr
 * @param  {} s
 */
const smallestSubarrayOfSumS_1 = (arr, s) => {
    let start = 0;
    let end = 0;
    let sum = arr[start];
    let length = Number.POSITIVE_INFINITY;
    while (end < arr.length) {
        if (sum < s) {
            end++;
            sum += arr[end];
        } else {
            // we got a subarray
            length = Math.min(length, end - start + 1);
            if (start === end) {
                sum = arr[start];
                end++;
            } else {
                sum -= arr[start];
                start++;
            }
        }
    }
    if (length === Number.POSITIVE_INFINITY) {
        return 0;
    } else {
        return length;
    }
}

const smallestSubarrayOfSumS_2 = (arr, s) => {
    let start = 0;
    let end = 0;
    let minLength = Number.POSITIVE_INFINITY;
    let sum = 0;

    while (end < arr.length) {
        sum += arr[end];
        while (sum >= s) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= arr[start];
            start++;
        }
        end++;
    }
    return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
};

module.exports = { smallestSubarrayOfSumS_1, smallestSubarrayOfSumS_2 };
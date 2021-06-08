// https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/
/**
 * Find a number in the array which is greater than or equal to the key.
 * The array is sorted in ascending order.
 * @param  {} nums
 */
const ceilingOfANumber = (arr, key) => {
    if (key < arr[0]) {
        return 0;
    }
    if (key > arr[arr.length - 1]) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

module.exports = { ceilingOfANumber };
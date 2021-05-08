/**
 * Search for an item in list of items (O(logn))
 * @param  {Array} arr array of numbers
 * @param  {number} searchItem item to search in array
 * @return {number} if not found return value is -1;
 *  otherwise index of the item in the array. Runtime complexity is O(logn)
 */
const binarySearch_1 = (arr, searchItem) => {
    //iterative
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === searchItem) {
            return mid;
        }
        else if (arr[mid] > searchItem) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
};

const binarySearch_2 = (arr, searchItem, start = 0, end = arr.length - 1) => {
    //recursive
    // space complexity is O(logn) (recursive calls use stack space)
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === searchItem) {
        return mid;
    }
    else if (arr[mid] > searchItem) {
        end = mid - 1;
        return binarySearch_2(arr,searchItem, start, end);
    } else {
        start = mid + 1;
        return binarySearch_2(arr, searchItem, start, end);
    }
};
module.exports = { binarySearch_1, binarySearch_2 };
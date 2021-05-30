// https://www.geeksforgeeks.org/floor-in-a-sorted-array/

/**
 * @param  {} arr
 * @param  {} key
 */
const floorOfANumber = (arr, key) => {
    if (key < arr[0]) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return end;
};

module.exports = floorOfANumber;
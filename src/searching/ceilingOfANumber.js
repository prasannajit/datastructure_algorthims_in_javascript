// https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/

const ceilingOfANumber_1 = (arr, key) => {
    if (arr.length === 0) {
        if (arr[0] > key) {
            return arr[0];
        } else {
            return -1;
        }
    }
    if (key > arr[arr.length - 1]) {
        return -1;
    }
    if (key < arr[0]) {
        return 0;
    }
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        if (end - start + 1 <= 3) {
            // do special handling
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] >= key) {
                return mid;
            }
            if (arr[mid] < key) {
                return end;
            }
        } else {
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
    }
    return -1;
};

const ceilingOfANumber_2 = (arr, key) => {
    if (key > arr[arr.length - 1]) {
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
    return start;
};
module.exports = { ceilingOfANumber_1, ceilingOfANumber_2 };
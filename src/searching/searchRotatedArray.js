const searchRotatedArray = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        if (arr[start] === arr[mid] && arr[mid] === arr[end]) {
            start = start + 1;
            end = end - 1;
        }
        else if (arr[mid] < arr[end]) {
            if (key > arr[mid] && key <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (key >= arr[start] && key < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
};

module.exports = searchRotatedArray;
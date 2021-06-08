const minDiffElement = (arr, key) => {
    if (key >= arr[arr.length - 1]) {
        return arr[arr.length - 1];
    }
    if (key <= arr[0]) {
        return arr[0];
    }
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] === key) {
            return arr[mid];
        }
        if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    if (key - arr[end] > arr[start] - key) {
        return arr[start];
    }
    return arr[end];
};

module.exports = minDiffElement;
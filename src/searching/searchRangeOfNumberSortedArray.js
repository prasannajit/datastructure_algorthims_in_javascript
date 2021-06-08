const searchRangeOfNumberSortedArray = (arr, key) => {
    const search = (start, end, findMax) => {
        let item = -1;
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);
            if (arr[mid] === key) {
                if (findMax === null) {
                    return mid;
                }
                item = mid;
                if (findMax) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
            else if (key > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return item;
    };
    let position = search(0, arr.length - 1, null);
    let result = [-1, -1];
    if (position === -1) {
        return result;
    }
    result[0] = search(0, position, false);
    result[1] = search(position, arr.length - 1, true);
    return result;
};

module.exports = searchRangeOfNumberSortedArray;
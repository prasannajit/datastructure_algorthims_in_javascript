const majorityElement_1 = (arr) => {
    if (arr.length === 0) {
        return;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let count = map.get(arr[i]);
            count += 1;
            if (count > Math.floor(arr.length / 2)) {
                return arr[i];
            } else {
                map.set(arr[i], count);
            }
        } else {
            map.set(arr[i], 1);
        }
    }
};

const majorityElement_2 = (arr) => {
    // Boyer moore voting algorithm
    let count = 0;
    let candidate;
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
        }
        if (candidate === arr[i]) {
            count += 1;
        } else {
            count -= 1;
        }
    }
    return candidate;
};

module.exports = { majorityElement_1, majorityElement_2 };
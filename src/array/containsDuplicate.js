const containsDuplicate_1 = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
};
const containsDuplicate_2 = (arr) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return true;
        } else {
            map.set(arr[i], 1);
        }
    }
    return false;
};
const containsDuplicate_3 = (arr) => {
    const arrCopy = arr.slice(0);
    arrCopy.sort((a, b) => a - b);
    for (let i = 0; i < arrCopy.length - 1; i++) {
        if (arrCopy[i] === arrCopy[i + 1]) {
            return true;
        }
    }
    return false;
};

module.exports = {
    containsDuplicate_1,
    containsDuplicate_2,
    containsDuplicate_3,
}
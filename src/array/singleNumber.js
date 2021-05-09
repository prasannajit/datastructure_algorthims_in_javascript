/**
 * Finds the only number that is not duplicated
 * @param  {Array} arr
 * @return {number} not duplicated number
 */
const singleNumber_1 = (arr) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], 2);
        } else {
            map.set(arr[i], 1);
        }
    }
    let it = map.entries();
    while (true) {
        let item = it.next()
        if (item.done) {
            break;
        } else {
            [key, value] = item.value;
            if (value === 1) {
                return key;
            }
        }
    }
};

/**
 * Time complexity O(n2)
 */
const singleNumber_2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                continue;
            } else if (arr[i] === arr[j]) {
                found=true;
                break;
            }
        }
        if(!found){
            return arr[i];
        }
    }
};

/**
 * Uses a set to store only one instance of a number
 * Calculates the sum, doubles it and subtract the sum of array elements
 */
const singleNumber_3 = (arr) => {
    const set = new Set();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        set.add(arr[i]);
    }
    let sumOfSetElements = 0;
    set.forEach(val => sumOfSetElements += val);
    return 2 * sumOfSetElements - sum;
};

/**
 * Uses XOR logic (a^b=b^a; a^0=a; a^a=0)
 */
const singleNumber_4 = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = result ^ arr[i];
    }
    return result;
};

module.exports = {
    singleNumber_1,
    singleNumber_2,
    singleNumber_3,
    singleNumber_4
}
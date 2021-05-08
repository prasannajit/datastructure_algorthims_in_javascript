/**
 * Reverse a string.
 * @param  {string} str Any string
 * @return {string} reversed str
 */
const reverse_1 = (str) => {
    if (str.length === 0 || str.length === 1) {
        return str;
    }
    let arr = str.split('');
    let mid = Math.floor((arr.length - 1) / 2);
    for (let i = 0, j = arr.length - 1; i <= mid; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

const reverse_2 = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
}

const reverse_3 = (str) => {
    return str.split('').reverse().join('');
}

module.exports = { reverse_1, reverse_2, reverse_3 };
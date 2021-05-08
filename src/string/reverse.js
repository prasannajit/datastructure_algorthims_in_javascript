/**
 * Reverse a string.
 * @param  {string} str Any string
 * @return {string} reversed str
 */
const reverse = (str) => {
    // Solution 1
    // if (str.length === 0 || str.length === 1) {
    //     return str;
    // }
    // let arr = str.split('');
    // let mid = Math.floor((arr.length - 1) / 2);
    // for (let i = 0, j = arr.length - 1; i <= mid; i++, j--) {
    //     [arr[i], arr[j]] = [arr[j], arr[i]];
    // }
    // return arr.join('');

    //Solution 2
    //return str.split('').reverse().join('');

    //Solutions 3
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
}

module.exports = reverse;
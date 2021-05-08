/**
 * Moves all the 0's to the end (O(n2))
 * @param  {Array} arr list of numbers
 */
const moveZerosToEnd_1 = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            count++;
            i--;
        }
    }
    for (let i = 0; i < count; i++) {
        arr.push(0);
    }
}

/**
 * @param  {Array} arr list of numbers (O(n))
 */
const moveZerosToEnd_2 = (arr) => {
    let readIndex = 0;
    let writeIndex = 0;
    while (readIndex < arr.length) {
        // If item is not 0 at readIndex
        // copy the value to writeIndex
        // increment both readIndex and writeIndex
        // If this item is 0, then just increment readIndex
        if (arr[readIndex] !== 0) {
            arr[writeIndex] = arr[readIndex];
            readIndex++;
            writeIndex++;
        } else {
            readIndex++;
        }
    }
    // Make all items from writeIndex to the end of the list as 0
    while (writeIndex < arr.length) {
        arr[writeIndex] = 0;
        writeIndex++;
    }
}

module.exports = {
    moveZerosToEnd_1,
    moveZerosToEnd_2,
}
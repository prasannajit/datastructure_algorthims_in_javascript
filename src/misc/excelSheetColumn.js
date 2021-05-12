const excelSheetColumn = (columnTitle) => {
    // A system where A to Z represent number 1 to 26.
    // Think of it as binary or octal or hexadecimal system and how that works.
    const length = columnTitle.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        let val = columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        sum += val * (26 ** (length - i - 1));
    }
    return sum;
};

module.exports = {
    excelSheetColumn,
}
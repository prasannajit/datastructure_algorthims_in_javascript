const romanToInteger = (s) => {
    let sum = 0;
    const roman = (ch) => {
        switch (ch) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
    for (let i = 0; i < s.length; i++) {
        let curr = roman(s[i]);
        let next = roman(s[i + 1]);
        if (curr < next) {
            sum -= curr;
        } else {
            sum += curr;
        }
    }
    return sum;
};

module.exports = romanToInteger;
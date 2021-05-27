const quadrupleSumToTarget = (arr, target) => {
    arr.sort((a, b) => a - b);
    let result = [];
    for (i = 0; i < arr.length - 3; i++) {
        while (arr[i] === arr[i + 1]) {
            i++;
        }
        let sumToFind = target - arr[i];
        for (let j = i + 1; j < arr.length - 2; j++) {
            while (arr[j] === arr[j + 1]) {
                j++;
            }
            let sumToFind1 = sumToFind - arr[j];
            let start = j;
            let end = arr.length - 1;
            while (start < end) {
                if (arr[start] + arr[end] === sumToFind1) {
                    result.push([arr[i], arr[j], arr[start], arr[end]]);
                    while (arr[start] === arr[start + 1]) {
                        start++;
                    }
                    while (arr[end] === arr[end - 1]) {
                        end--;
                    }
                    start++;
                    end--;
                } else if (arr[start] + arr[end] > sumToFind1) {
                    end--;
                } else {
                    start++;
                }
            }
        }
    }
    return result;
};

module.exports = quadrupleSumToTarget;
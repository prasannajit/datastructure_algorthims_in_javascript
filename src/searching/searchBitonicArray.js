const searchBitonicArray = (arr, key) => {
    let start = 0;
    let end = arr.length - 1;

    // find max in bitonic array
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] > arr[mid + 1]) {
            end = mid;
        } else {
            start = mid+1;
        }
    }
    let maxIndex = start;
    
    start=0;
    end=maxIndex;
    while(start<=end){
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid]===key) {
            return mid;
        }
        if(arr[mid]<key){
            start=mid+1;
        } else{
            end=mid-1;
        }
    } 

    start=maxIndex+1;
    end=arr.length-1;
    while(start<=end){
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid]===key) {
            return mid;
        }
        if(arr[mid]>key){
            start=mid+1;
        } else{
            end=mid-1;
        }
    }
    return -1;
}

module.exports = searchBitonicArray;
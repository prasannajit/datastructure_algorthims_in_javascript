
class ArrayReader {

    constructor(arr) {
      this.arr = arr;
    }
  
    get(index) {
      if (index >= this.arr.length)
        return Number.MAX_SAFE_INTEGER;
      return this.arr[index]
    }
  };
  
  
  const searchInfiniteArray_1 = function (reader, key) {
    let i = 0;
    let prev = 0;
    let end = 0;
    let start = 0;
    while (true) {
      let val = reader.get(i);
      if (key <= val) {
        end = i;
        start = prev;
        break;
      } else {
        prev = i;
        i=i*2+1;
      }
    }
    while(start<=end){
      let mid=Math.floor((start+end)/2);
      let item = reader.get(mid);
      if(item===key){
        return mid;
      }
      if(key<item){
        end=mid-1;
      } else{
        start=mid+1;
      }
    }
    return -1;
  };
  
  module.exports = {ArrayReader,searchInfiniteArray_1};
  
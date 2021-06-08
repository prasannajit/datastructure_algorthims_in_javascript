const nextLetter = (letters, key) => {
  if (key<letters[0] || key > letters[letters.length - 1]) {
    return letters[0];
  }
  let start = 0;
  let end = letters.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if(letters[mid]===key){
      if(mid===letters.length-1){
        return letters[0];
      }
      return letters[mid+1];
    }
    if (letters[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start];
};

module.exports = nextLetter;

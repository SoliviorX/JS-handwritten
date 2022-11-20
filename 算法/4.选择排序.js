function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...arr.slice(i));
    console.log("min", min);
    let index;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === min) {
        index = j;
        console.log("index", index);
        break;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}
console.log(selectSort([4, 1, 3, 2]));
// [4,1,3,2]->[1,4,3,2]->[1,2,4,3]->[1,2,3,4]

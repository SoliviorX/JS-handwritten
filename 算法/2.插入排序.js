function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    // i = 3, j = 2, arr[i] = 2, arr[j] = 4
    if (arr[i] < arr[j]) {
      let temp = arr[i]; // temp = 2
      while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j]; // arr[3] = 4 -----> arr[2] = 3
        j--; // j=1 ----> j=0
      }
      arr[j + 1] = temp; // arr[1] = 2，插入
    }
  }
  return arr;
}
// [1,3,4,2] ->[1,3,4,4]->[1,3,3,4]->[1,2,3,4]

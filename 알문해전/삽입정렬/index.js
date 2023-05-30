function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    // arr[0, i-1]은 이미 정렬되어 있다.
    // arr[0,.. i-1]에 A[i]를 끼워넣는다.
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      // arr[j+1, ..i]의 모든 원소는 A[j]보다 크다.
      // A[0,..i]구간은 A[j]를 제외하면 정렬되어있다.
      swap(arr, j - 1, j);
      --j;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

const arr = [1, 0, 3, 4, -1, 9];

const r = solution(arr);
console.log(r);

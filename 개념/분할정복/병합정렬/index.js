// 반으로 분할한다.
// 이 과정을 arr의 len이 1이 될 때까지 반복한다.
// len이 1이 되면, 이를 비교한다. 양 arr의 앞쪽에 있는거를..
// 이 과정을 전체 배열을 만들 떄 까지 반복한다.

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const [left, right] = divide(arr);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  const res = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length || right < arr2.length) {
    if (arr1[left] > arr2[right] || arr1[left] === undefined) {
      res.push(arr2[right]);
      right++;
    } else {
      res.push(arr1[left]);
      left++;
    }
  }
  return res;
}

function divide(arr) {
  const mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

const r = mergeSort([1, 3, 11, 0, 9, 2, 5]);
console.log(r);

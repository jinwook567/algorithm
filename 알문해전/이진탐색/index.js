// 반복문 불변식
// lo < hi
// arr[lo] < x <= arr[hi]

function solution(arr, x) {
  const n = arr.length;
  let lo = -1;
  let hi = n;

  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] < x) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return hi;
}

const arr = [1, 2, 3, 4, 5];
const r = solution(arr, 3);
console.log(r);

function solution(arr) {
  const psum = Array(arr.length).fill(0);
  psum[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    psum[i] = psum[i - 1] + arr[i];
  }

  const sorted = psum
    .map((val, index) => ({ val, index }))
    .sort((a, b) => a.val - b.val);

  let min = Infinity;
  let ret = { start: 0, end: 0 };

  for (let i = 0; i < sorted.length - 1; i++) {
    const diff = Math.abs(sorted[i + 1].val - sorted[i].val);
    if (min > diff) {
      min = diff;
      ret.start = Math.min(sorted[i].index, sorted[i + 1].index) + 1;
      ret.end = Math.max(sorted[i].index, sorted[i + 1].index);
    }
  }
  return ret;
}

const arr = [-14, 7, 2, 3, -8, 4, -6, 8, 9, 11];
const r = solution(arr);
console.log(r);

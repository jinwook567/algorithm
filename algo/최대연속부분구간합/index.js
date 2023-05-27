function solution() {
  const arr = [-7, 4, -3, 6, 3, -8, 3, 4];
  let psum = 0;
  let res = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    psum = Math.max(psum, 0) + arr[i];
    res = Math.max(res, psum);
  }
  return res;
}

const r = solution();
console.log(r);

function solution(example) {
  let ret = 0;
  for (let i = 0; i < example.length; i++) {
    ret = Math.max(ret, maxSquare(i));
  }
  return ret;

  // functions
  function maxSquare(idx) {
    let leftCnt = 0;
    for (let i = idx - 1; i >= 0; i--) {
      if (example[i] < example[idx]) break;
      leftCnt++;
    }

    let rightCnt = 0;
    for (let j = idx + 1; j < example.length; j++) {
      if (example[j] < example[idx]) break;
      rightCnt++;
    }

    return example[idx] * (1 + leftCnt + rightCnt);
  }
}

// const example = [7, 1, 5, 9, 6, 7, 3];
const example = [1, 4, 4, 4, 4, 1, 1];
const r = solution(example);
console.log(r);

function lis(A) {
  if (A.length === 1) return 1;

  let ret = 0;
  for (let i = 0; i < A.length; i++) {
    const B = [];
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] < A[j]) B.push(A[j]);
      // 1은 나, 그리고 lis(B)의 리턴값을 더하라. 그것 중의 최대가 ret임.
      ret = Math.max(ret, 1 + lis(B));
    }
  }
  return ret;
}

const S = [0, 8, 3, 5];
const cache = Array(S.length).fill(-1);
function lis2(start) {
  if (cache[start] !== -1) return cache[start];

  cache[start] = 1;
  for (let next = start + 1; next < S.length; next++) {
    if (S[start] < S[next])
      cache[start] = Math.max(cache[start], lis2(next) + 1);
  }
  return cache[start];
}

const r = lis([0, 8, 3, 5]);
console.log(r);

// -1에서부터 시작해서, 전체 배열을 전부 순회함.
function lis3(start) {
  if (cache[start + 1] !== -1) return cache[start + 1];

  cache[start + 1] = 1;

  for (let next = start + 1; next < S.length; next++) {
    if (S[start] < S[next] || start === -1) {
      cache[start + 1] = max(cache[start + 1], lis3(next) + 1);
    }
  }

  return cache[start + 1];
}

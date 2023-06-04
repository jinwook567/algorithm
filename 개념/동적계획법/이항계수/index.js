function bino(n, r) {
  if (n === r || r === 0) return 1;
  return bino(n - 1, r - 1) + bino(n - 1, r);
}

const n = 5;
const cache = Array(n + 1)
  .fill()
  .map((_) => Array(n + 1).fill(-1));

function bino2(n, r) {
  if (n === r || r === 0) return 1;
  if (cache[n][r] !== -1) return cache[n][r];

  cache[n][r] = bino2(n - 1, r - 1) + bino2(n - 1, r);
  return cache[n][r];
}

const ret = bino2(5, 2);

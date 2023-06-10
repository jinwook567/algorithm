function solution(n) {
  const cache = Array(n + 1)
    .fill()
    .map((_) => ({ value: -1 }));

  return tiling(n);

  function tiling(n) {
    if (n <= 1) return 1;
    const ret = cache[n];

    if (ret.value !== -1) return ret.value;

    ret.value = (tiling(n - 1) + tiling(n - 2)) % MOD;
    return ret.value;
  }
}

const n = 5;
const r = solution(n);
console.log(r);

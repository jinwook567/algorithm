function solution(n) {
  const cache = Array(n + 1)
    .fill()
    .map((_) => ({ value: -1 }));

  return (
    tiling(n) -
    (isEven(n) ? tiling((n - 2) / 2) + tiling(n / 2) : tiling((n - 1) / 2))
  );

  function tiling(n) {
    if (n <= 1) return 1;

    const ret = cache[n];
    if (ret.value !== -1) return ret.value;

    ret.value = 0;
    ret.value = tiling(n - 1) + tiling(n - 2);
    return ret.value;
  }
}

function isEven(n) {
  return n % 2 === 0;
}

const n = 2;
const r = solution(n);
console.log(r);

function solution(m, n) {
  const cache = Array(m + 1)
    .fill()
    .map((_) =>
      Array(n + 1)
        .fill()
        .map((_) => ({ value: -1 }))
    );

  return count(m, n) / 4 ** m;

  function count(m, n) {
    if (m === 0) return n > 0 ? 0 : 1;

    const ret = cache[m][n];
    if (ret.value !== -1) return ret.value;

    ret.value = 0;

    const rain = count(m - 1, n - 1 > 0 ? n - 1 : 0);
    const notRain = count(m - 1, n - 2 > 0 ? n - 2 : 0);

    ret.value = rain * 3 + notRain;
    return ret.value;
  }
}

const m = 2;
const n = 4;

const r = solution(m, n);
console.log(r);
console.log(1 / 16);

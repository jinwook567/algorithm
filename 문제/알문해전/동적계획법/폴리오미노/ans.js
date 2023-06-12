const n = 4;
const first = 0;
const MOD = 10 * 1000 * 1000;

const cache = Array(n + 1)
  .fill()
  .map((_) =>
    Array(n + 1)
      .fill()
      .map((_) => ({ value: -1 }))
  );

function poly(n, first) {
  if (n === first) return 1;

  const ret = cache[n][first];
  if (ret.value !== -1) return ret.value;

  ret.value = 0;
  for (let second = 1; second <= n - first; second++) {
    let add = second + first - 1;
    add *= poly(n - first, second);
    add %= MOD;
    ret.value += add;
    ret.value %= MOD;
  }

  return ret.value;
}

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += poly(n, i);
}

console.log(sum);

function poly(n, upper) {
  if (n === 0) return 1;

  let ret = 0;
  for (let i = 1; i <= n; i++) {
    ret += (upper + i - 1) * poly(n - i, i);
  }
  return ret;
}

const n = 4;
let sum = 0;

const cache = Array(n + 1)
  .fill()
  .map((_) =>
    Array(n + 1)
      .fill()
      .map((_) => ({ value: -1 }))
  );

function poly_memorize(n, upper) {
  if (n === 0) return 1;

  const ret = cache[n][upper];

  if (ret.value !== -1) return ret.value;

  ret.value = 0;
  for (let i = 1; i <= n; i++) {
    ret.value += (upper + i - 1) * poly(n - i, i);
  }
  return ret.value;
}

for (let i = 1; i <= n; i++) {
  sum += poly_memorize(n - i, i);
}
console.log(sum);

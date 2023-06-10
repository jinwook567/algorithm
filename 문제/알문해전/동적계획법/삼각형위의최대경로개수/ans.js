const n = 4;
const triangle = [[9], [5, 7], [1, 3, 2], [3, 5, 5, 6]];

const cache = Array(n)
  .fill()
  .map((_) =>
    Array(n)
      .fill()
      .map((_) => ({ value: -1 }))
  );

function path(y, x) {
  if (y === n - 1) return triangle[y][x];

  const ret = cache[y][x];
  if (ret.value !== -1) return ret.value;

  ret.value = triangle[y][x] + Math.max(path(y + 1, x), path(y + 1, x + 1));
  return ret.value;
}

const countCache = Array(n)
  .fill()
  .map((_) =>
    Array(n)
      .fill()
      .map((_) => ({ value: -1 }))
  );

function count(y, x) {
  if (y === n - 1) return 1;

  const ret = countCache[y][x];
  if (ret.value !== -1) return ret.value;

  ret.value = 0;
  if (path(y + 1, x) >= path(y + 1, x + 1)) ret.value += count(y + 1, x);
  if (path(y + 1, x) <= path(y + 1, x + 1)) ret.value += count(y + 1, x + 1);

  return ret.value;
}

const r = path(0, 0);
const l = count(0, 0);
console.log(l);

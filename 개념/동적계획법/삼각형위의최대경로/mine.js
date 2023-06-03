const triangle = [
  [0],
  [0, 1],
  [0, 1, 2],
  [0, 1, 2, 3],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4, 5],
];

function max(y, x) {
  console.log({ y, x });

  if (y === triangle.length - 1) return triangle[y][x];
  const ret = triangle[y][x] + Math.max(max(y + 1, x), max(y + 1, x + 1));
  return ret;
}

const n = triangle.length;
const cache = Array(n)
  .fill()
  .map((_) => Array(n).fill(-1));

function max2(y, x) {
  console.log(cache);
  if (y === triangle.length - 1) return triangle[y][x];

  if (cache[y][x] !== -1) {
    return cache[y][x];
  }

  cache[y][x] = triangle[y][x] + Math.max(max2(y + 1, x), max2(y + 1, x + 1));
  return cache[y][x];
}

const r = max2(0, 0);
// console.log(cache);
// console.log(r);

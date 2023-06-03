const MAX_NUMBER = 10;
let n, triangle;
let cache, cache2;

function path(y, x, sum) {
  if (y === n - 1) return sum + triangle[y][x];

  let ret = cache[y][x][sum];
  if (ret !== -1) return ret;

  sum += triangle[y][x];
  return (ret = Math.max(path(y + 1, x + 1, sum), path(y + 1, x, sum)));
}

function path2(y, x) {
  if (y === n - 1) return triangle[y][x];

  let ret = cache2[y][x];
  if (ret !== -1) return ret;

  return (ret =
    Math.max(path2(y + 1, x), path2(y + 1, x + 1)) + triangle[y][x]);
}

function count(y, x) {
  if (y === n - 1) return 1;

  let ret = countCache[y][x];
  if (ret !== -1) return ret;

  ret = 0;
  if (path2(y + 1, x + 1) >= path2(y + 1, x)) ret += count(y + 1, x + 1);
  if (path2(y + 1, x + 1) <= path2(y + 1, x)) ret += count(y + 1, x);
  return ret;
}

function iterative() {
  for (let x = 0; x < n; ++x) C[n - 1][x] = triangle[n - 1][x];

  for (let y = n - 2; y >= 0; --y) {
    for (let x = 0; x < y + 1; ++x) {
      C[y][x] = Math.max(C[y + 1][x], C[y + 1][x + 1]) + triangle[y][x];
    }
  }

  return C[0][0];
}

function iterative2() {
  for (let x = 0; x < n; ++x) C2[(n - 1) % 2][x] = triangle[n - 1][x];

  for (let y = n - 2; y >= 0; --y) {
    for (let x = 0; x < y + 1; ++x) {
      C2[y % 2][x] =
        Math.max(C2[(y + 1) % 2][x], C2[(y + 1) % 2][x + 1]) + triangle[y][x];
    }
  }

  return C2[0][0];
}

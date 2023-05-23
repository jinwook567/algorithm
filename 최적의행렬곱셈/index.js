function solution(matrix_size) {
  const length = matrix_size.length;
  const d = Array.from({ length }, () =>
    Array.from({ length }, () => Infinity)
  );

  const ans = recur(d, matrix_size, 0, length - 1);

  return ans;
}

function recur(d, matrix_size, i, j) {
  if (i > j) {
    const temp = j;
    j = i;
    i = temp;
  }

  if (i === j) return 0;
  if (Math.abs(i - j) === 1) {
    d[i][i + 1] = add(matrix_size[i], matrix_size[i + 1]);
    return d[i][i + 1];
  }
  if (d[i][j] !== Infinity) return d[i][j];

  for (let e = i + 1; e <= j; e++) {
    const res = add(result(matrix_size, i, e - 1), result(matrix_size, e, j));
    const sum =
      recur(d, matrix_size, i, e - 1) + recur(d, matrix_size, e, j) + res;
    d[i][j] = Math.min(d[i][j], sum);
  }

  return d[i][j];
}

function result(matrix_size, i, j) {
  return [matrix_size[i][0], matrix_size[j][1]];
}

function add(matrix1, matrix2) {
  return matrix1[0] * matrix1[1] * matrix2[1];
}

const matrix_size = [
  [5, 3],
  [3, 10],
  [10, 6],
];

const r = solution(matrix_size);

console.log({ r });

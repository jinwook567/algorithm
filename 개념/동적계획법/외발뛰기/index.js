// board는 공통으로 사용되는 값이다.
const board = [];
const n = board.length;

function jump(y, x) {
  if (y >= n || x >= n) return false;
  if (y === n - 1 && x === n - 1) return true;

  const jumpSize = board[y][x];
  return jump(jumpSize + y, x) || jump(y, x + jumpSize);
}

// y,x에서의 가능 여부를 이차원 배열 형태로 가지고 있다.
// jump 함수가 가질 수 없는 값인 -1로 초기화 한다. 그리고 가능하다면 1, 아니라면 0으로 반환한다.
const cache = [];

function jump2(y, x) {
  if (y >= n || x >= n) return false;
  if (y === n - 1 && x === n - 1) return true;

  if (cache[y][x] === -1) return !!cache[y][x];

  const jumpSize = board[y][x];
  return (cache[y][x] = jump2(y + jumpSize, x) || jump2(y + jumpSize, x));
}

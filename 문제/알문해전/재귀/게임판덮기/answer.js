const covertype = [
  [
    [0, 0],
    [1, 0],
    [0, 1],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, -1],
  ],
];

function solution(graph) {
  const board = graph.map((arr) => arr.map((item) => (item === "#" ? 1 : 0)));
  return cover(board);
}

// v의 (y, x)를 type번 방법으로 덮거나, 덮었던 블록을 없앤다.
function set(board, y, x, type, delta) {
  let ok = true;
  for (let i = 0; i < 3; i++) {
    const ny = y + covertype[type][i][0];
    const nx = x + covertype[type][i][1];
    // 게임판의 사이즈를 벗어나면 false 반환
    if (ny < 0 || ny >= board.length || nx < 0 || nx >= board[0].length) {
      ok = false;
      break;
    }

    // delta가 -1인 경우 이미 검게 차지한 곳에 또 차지하면 1보다 크므로 거짓을 반환
    if ((board[ny][nx] += delta) > 1) ok = false;
  }
  return ok;
}

function cover(board) {
  let y = -1;
  let x = -1;
  // 도형의 맨 윗줄 왼쪽을 기준으로 가장 먼저 보이는 흰 칸을 찾는다.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        y = i;
        x = j;
        break;
      }
    }
    if (y !== -1) break;
  }

  if (y === -1) return 1;
  let ret = 0;

  for (let type = 0; type < 4; ++type) {
    // board(y, x)를 type 형태로 덮을 수 있으면 재귀 호출한다.
    if (set(board, y, x, type, 1)) ret += cover(board);
    // 덮었던 블록을 치운다.
    set(board, y, x, type, -1);
  }
  return ret;
}

const n = 3;
const m = 7;
const graph = [
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", "#", ".", ".", "#", "#", "#"],
];

const r = solution(graph);
console.log(r);

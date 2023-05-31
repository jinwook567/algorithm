function solution(n, m, graph) {
  graph = graph.map((arr) => arr.map((item) => (item === "#" ? 1 : 0)));
  const visited = graph.map((arr) => arr.map(() => false));

  function add(a, b) {
    return a + b;
  }

  const blackCnt = graph.reduce((acc, arr) => add(acc, arr.reduce(add, 0)), 0);
  return count(graph, n * m - blackCnt, 0, 0, n - 1, m - 1, visited);
}

const dy = [
  [1, 1],
  [1, 1],
  [-1, -1],
  [-1, -1],
];
const dx = [
  [0, 1],
  [0, -1],
  [0, 1],
  [0, -1],
];

// (0,0)부터 (startY, startX)의 직사각형은 이미 타일을 넣어봤다고 가정한다.

function count(graph, whiteLeftCnt, startY, startX, endY, endX, visited) {
  if (whiteLeftCnt % 3 !== 0) return 0;
  if (visited[startY][startX]) return 0;
  if (whiteLeftCnt === 0) return 1;

  visited[startY][startX] = true;

  let res = 0;

  for (let y = startY; y <= endY; y++) {
    for (let x = 0; x <= endX; x++) {
      if (y === startY && x < startX) continue;

      for (let i = 0; i < dy.length; i++) {
        for (let j = 0; j < dy[i].length; j++) {
          const ny = dy[i][j];
          const nx = dx[i][j];
          if (ny < 0 || ny > endY || nx < 0 || nx > endX) continue;
          graph[ny][nx] += 1;

          if (check(graph, y, x, ny, nx)) {
            res += count(
              graph,
              whiteLeftCnt - 3,
              startY,
              startX,
              endY,
              endX,
              visited
            );
          }

          graph[ny][nx] -= 1;
        }
      }
    }
  }

  return res;
}

function check(graph, startY, startX, endY, endX) {
  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= endX; x++) {
      if (graph[y] !== undefined && graph[y][x] > 1) return false;
    }
  }
  return true;
}

const n = 3;
const m = 7;
const graph = [
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", ".", ".", ".", ".", ".", "#"],
  ["#", "#", ".", ".", "#", "#", "#"],
];

const r = solution(n, m, graph);
console.log(r);

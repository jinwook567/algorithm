function solution(n, m, x, y, r, c, k) {
  const direction = ["d", "l", "r", "u"];
  const dx = [0, -1, 1, 0];
  const dy = [1, 0, 0, -1];

  let answer = "";

  const start = [x - 1, y - 1];
  const end = [r - 1, c - 1];

  if (getDistance(start, end) > k) return "impossible";
  while (k > 0) {
    for (let i = 0; i < 4; i++) {
      const next = [start[0] + dy[i], start[1] + dx[i]];
      if (check(next, n, m)) {
        if (getDistance(next, end) <= k) {
          k -= 1;
          start[0] = next[0];
          start[1] = next[1];
          answer += direction[i];
          break;
        }
      }
    }
  }
  if (start[0] !== end[0] || start[1] !== end[1]) return "impossible";
  return answer;
}

function getDistance(pos1, pos2) {
  const [y1, x1] = pos1;
  const [y2, x2] = pos2;
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function check(pos, n, m) {
  const [pos_y, pos_x] = pos;
  return pos_y >= 0 && pos_y <= n - 1 && pos_x >= 0 && pos_x <= m - 1;
}

const [n, m, x, y, r, c, k] = [3, 4, 2, 3, 3, 1, 5];
const sol = solution(n, m, x, y, r, c, k);
console.log(sol);

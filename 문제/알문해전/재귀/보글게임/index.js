function solution(graph, y, x, word) {
  return hasWord(graph, y, x, word);
}

function hasWord(graph, y, x, word) {
  if (graph[y][x] !== word.charAt(0)) return false;
  if (!inRange(graph, y, x)) return false;
  if (word.length === 1) return true;

  const dx = [1, -1, 0, 0, 1, 1, -1, -1];
  const dy = [0, 0, 1, -1, 1, -1, -1, 1];

  for (let i = 0; dx.length; i++) {
    if (hasWord(graph, y + dy[i], x + dx[i], word.slice(1))) return true;
  }
  return false;
}

function inRange(graph, y, x) {
  const yLen = graph.length;
  const xLen = graph[0].length;
  if (y >= yLen || y < 0) return false;
  if (x >= xLen || x < 0) return false;
  return true;
}

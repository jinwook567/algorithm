function solution(dist) {}

// dist는 변하지 않는 변수로써 상위 스코프에 작성해놓는다.
// n은 변하지 않는 변수로써 상위 스코프에 작성한다.

function shortestPath(visited, current, leftCnt, acc) {
  if (leftCnt === 0) return acc;

  let res = Infinity;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    res = Math.min(
      res,
      shortestPath(visited, i, leftCnt - 1, acc + dist[current][i])
    );
    visited[i] = false;
  }

  return res;
}

const r = solution(graph);
console.log(r);

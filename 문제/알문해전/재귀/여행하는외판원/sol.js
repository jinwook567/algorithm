//path: 지금까지 만든 경로
//visited: 각 도시의 방문 여부
//currentLength: 지금까지 만든 경로 길이
//나머지 도시들을 모두 방문하는 경로들 중 가장 짧은 것의 길이를 반환
function shortestPath(path, visited, currentLength) {
  if (path.length === n) {
    return currentLength;
  }
  let ret = Number.MAX_VALUE;

  // 다음 방문할 도시를 전부 시도해 본다.
  for (let next = 0; next < n; ++next) {
    if (visited[next]) continue;
    const here = path[path.length - 1];

    path.push(next);
    visited[next] = true;

    let cand = shortestPath(path, visited, currentLength + dist[here][next]);

    ret = Math.min(ret, cand);
    visited[next] = false;
    path.pop();
  }

  return ret;
}

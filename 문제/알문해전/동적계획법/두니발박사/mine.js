const N = 5;
const days = 2;
const prison = 0;

const graph = [
  [0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
];

const countedGraph = graph.map((arr) => arr.reduce((a, b) => a + b, 0));

function count(days, current, town) {
  if (days === 0) return current === town ? 1 : 0;

  let ret = 0;

  for (let i = 0; i < N; i++) {
    if (graph[current][i] === 1) {
      ret += count(days - 1, i, town) / countedGraph[current];
    }
  }

  return ret;
}

const ans = [];

for (let i = 0; i < N; i++) {
  ans.push(count(days, prison, i));
}

console.log(ans);

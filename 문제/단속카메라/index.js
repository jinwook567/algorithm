function solution(routes) {
  const d = Array(60001).fill(0);
  let ans = 0;
  let leftCar = routes.length;

  routes.forEach(([start, end]) => {
    d[d_pos(start)] += 1;
    d[d_pos(end)] -= 1;
  });

  const map = new Map();

  for (let i = 1; i < d.length; i++) {
    d[i] += d[i - 1];
    if (d[i] > d[i - 1] && d[i] > 1) {
      map.set(d[i], (map.get(d[i]) || 0) + 1);
    }
  }

  const sorted = [...map.entries()].sort((a, b) => b[0] - a[0]);

  for (let [key, value] of sorted) {
    if (leftCar === 0) break;
    leftCar -= key * value;
    ans += value;
  }

  return ans + leftCar;
}

function d_pos(a) {
  return a + 30000;
}

const routes = [
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];
const r = solution(routes);
console.log(r);

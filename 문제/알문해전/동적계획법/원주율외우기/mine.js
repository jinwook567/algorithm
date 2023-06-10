function solution(pi) {
  if (pi.length === 0) return 0;

  let ret = Infinity;

  for (let L = 3; L <= 5; L++) {
    ret = Math.min(ret, classify(pi.slice(0, L)) + solution(pi.slice(L)));
  }

  return ret;
}

function classify(pi) {
  const t = pi;
  if (new Set(t).size === 1) return 1;

  let progressive = true;
  for (let i = 0; i < t.length - 1; i++) {
    if (t[i + 1] - t[i] !== t[1] - t[0]) progressive = false;
  }

  if (progressive && t[1] - t[0] === 1) return 2;

  let cross = true;
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== t[i % 2]) cross = false;
  }

  if (cross) return 4;
  if (progressive) return 5;
  return 10;
}

const pi = [1, 2, 3, 4, 1, 2, 3, 4];
const r = solution(pi);
console.log(r);

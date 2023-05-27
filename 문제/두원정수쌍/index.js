function solution(r1, r2) {
  let ans = 0;

  for (let i = r1; i < r2; i++) {
    ans += square(i);
  }

  return ans + circle(r2);
}

function circle(r) {
  let res = 0;
  for (let i = 1; i < r; i++) {
    const num = Math.sqrt(r * r - i * i);
    if (Number.isInteger(num)) res++;
  }
  return res * 4;
}

function square(r) {
  return 8 * r;
}

const r1 = 2;
const r2 = 4;

const r = solution(r1, r2);
console.log({ r });

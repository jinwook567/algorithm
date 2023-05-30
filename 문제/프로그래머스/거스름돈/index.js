function solution(n, money) {
  const d = Array(n + 1).fill(0);
  d[0] = 1;

  for (let i = 0; i < money.length; i++) {
    const unit = money[i];
    for (let j = 0; j < d.length; j++) {
      if (j - unit < 0) continue;
      d[j] += d[j - unit];
    }
  }

  return d[n] % 1000000007;
}

const n = 5;
const money = [1, 2, 5];

const r = solution(n, money);
console.log(r);

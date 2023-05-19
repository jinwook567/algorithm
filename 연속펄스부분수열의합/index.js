function solution(sequence) {
  const f = compose();
  return Math.max(f(sequence), f(sequence.map((v) => -v)));
}

function compose() {
  return (sequence) => {
    return findMax(count(sequence));
  };
}

function findMax(d) {
  let min = Infinity;
  let res = -Infinity;

  for (let i = 0; i < d.length; i++) {
    res = Math.max(res, d[i] - (i === 0 ? 0 : min));
    min = Math.min(min, d[i], 0);
  }
  return res;
}

function count(sequence) {
  const d = [];

  let sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    sum = isEven(i) ? sum + sequence[i] : sum - sequence[i];
    d.push(sum);
  }
  return d;
}

function isEven(num) {
  return num % 2 === 0 || num === 0;
}

const sequence = [2, 0, 3, 0, 5];

const r = solution(sequence);
console.log(r);

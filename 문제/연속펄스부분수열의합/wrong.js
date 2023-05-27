function solution(sequence) {
  return Math.max(count(sequence), count(sequence.map((v) => -v)));
}

function count(arr) {
  let end = 0;
  let sum = 0;
  let max = -Infinity;

  for (let start = 0; start < arr.length; start++) {
    while (
      (calc(sum, -arr[start], start) <= calc(sum, arr[end], end) && end < arr.length) ||
      start === end
    ) {
      sum = calc(sum, arr[end], end);
      end += 1;
      max = Math.max(max, sum);
    }

    sum = calc(sum, -arr[start], start);
    max = Math.max(max, sum);
  }
  return max;
}

function log(predicate, ...args) {
  if (predicate) console.log(...args);
}

function calc(acc, num, index) {
  return isEven(index) ? acc + num : acc - num;
}

function isEven(num) {
  return num % 2 === 0 || num === 0;
}

const sequence = [2, 3, -6, 1, 3, -1, 2, 4];
// const sequence = [2, 0, 3, 0, 5, 1, 3];

console.log(count(sequence.map((v) => v)));
// const r = solution(sequence);
// console.log(r);

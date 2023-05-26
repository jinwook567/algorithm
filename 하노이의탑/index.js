function solution(n) {
  const answer = [];
  hanoi(n, 1, 3, 2, answer);
  return answer;
}

function hanoi(n, from, to, other, answer) {
  if (n === 1) {
    answer.push([from, to]);
    return;
  }

  hanoi(n - 1, from, other, to, answer);
  hanoi(1, from, to, other, answer);
  hanoi(n - 1, other, to, from, answer);
}

const r = solution(3);
console.log({ r });

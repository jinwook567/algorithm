let answer = 0;

function solution(n, m, set) {
  const students = Array(n)
    .fill()
    .map((_, i) => i);

  const len = set.length;
  for (let i = 0; i < len; i++) {
    set.push(set[i][1], set[i][0]);
  }

  count(students, set, 0);

  return answer / factorial(1, n / 2);
}

function count(students, set) {
  if (students.length === 0) {
    answer++;
    return;
  }

  students.forEach((student) => {
    const buddies = findBuddies(student, set);
    buddies.forEach(([_, buddy]) => {
      if (!students.includes(buddy)) return;

      count(
        students.filter((st) => st !== student && st !== buddy),
        set
      );
    });
  });
}

function findBuddies(student, set) {
  return set.filter((arr) => arr[0] === student);
}

function factorial(acc, n) {
  if (n === 1) return acc;
  return factorial(acc * n, n - 1);
}

// const n = 4;
// const m = 6;
// const set = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
//   [3, 0],
//   [0, 2],
//   [1, 3],
// ];

const n = 6;
const m = 10;
const set = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
];

const r = solution(n, m, set);
console.log(r);

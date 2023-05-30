function c(pick, toPick, n) {
  const res = [];
  solution(pick, toPick, n, (pick) => res.push(pick));
  return res;
}

function solution(pick = [], toPick, n, cb) {
  if (pick.length === n) {
    cb(pick);
    return;
  }

  toPick.forEach((num, index) => {
    toPick.splice(index, 1);
    solution([...pick, num], toPick, n, cb);
    toPick.splice(index, 0, n);
  });
}

const r = c([], [1, 2, 3, 4, 5], 3);

console.log(r);

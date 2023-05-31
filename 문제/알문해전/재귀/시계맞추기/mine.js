const switches = [
  [0, 1, 2],
  [3, 7, 9, 11],
  [4, 10, 14, 15],
  [0, 4, 5, 6, 7],
  [6, 7, 8, 10, 12],
  [0, 2, 14, 15],
  [3, 14, 15],
  [4, 5, 7, 14, 15],
  [1, 2, 3, 4, 5],
  [3, 4, 5, 9, 13],
];

function solution() {
  //   const clocks = [12, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12];
  const clocks = [12, 9, 3, 12, 6, 6, 9, 3, 12, 9, 12, 9, 12, 12, 6, 6];
  const times = switches.map((_) => 0);

  const cand = short(clocks, times, 0);
  return cand === Infinity ? -1 : cand;
}

// 4번 이상은 수행하지 않도록 설계, 그리고 만약에 안된다면 -1임.
function short(clocks, times, start) {
  if (clocks.every((clock) => clock === 12))
    return times.reduce((acc, time) => acc + time, 0);

  if (start >= times.length) return Infinity;

  let res = Infinity;

  for (let pushTimes = 0; pushTimes < 4; pushTimes++) {
    pushSwitch(clocks, times, 3, 1, start, pushTimes);

    const cand = short(clocks, times, start + 1);
    res = Math.min(res, cand);

    pushSwitch(clocks, times, -3, -1, start, pushTimes);
  }

  return res;
}

function pushSwitch(clocks, times, clockDelta, timeDelta, switchIndex, cnt) {
  for (let i = 0; i < cnt; i++) {
    switches[switchIndex].forEach((clock) => {
      if (clocks[clock] === 12 && clockDelta > 0) {
        clocks[clock] = clockDelta;
      } else if (clocks[clock] === 3 && clockDelta < 0) {
        clocks[clock] = 12;
      } else {
        clocks[clock] += clockDelta;
      }
    });
    times[switchIndex] += timeDelta;
  }
}

console.log(solution());
// Infinity면 -1, 아니라면 정답을 리턴하는 로직을 마지막에 처리.

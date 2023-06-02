const p = [
  { diamond: 1, iron: 1, stone: 1 },
  { diamond: 5, iron: 1, stone: 1 },
  { diamond: 25, iron: 5, stone: 1 },
];

function solution(picks, minerals) {
  if (picks.every((pick) => pick === 0)) return 0;
  if (minerals.length === 0) return 0;

  let ret = Infinity;

  for (let i = 0; i < 3; i++) {
    if (picks[i] === 0) continue;

    picks[i] -= 1;
    ret = Math.min(
      ret,
      calc(i, minerals.slice(0, 5)) + solution(picks, minerals.slice(5))
    );
    picks[i] += 1;
  }

  return ret;
}

function calc(pick, minerals) {
  let ret = 0;
  for (let i = 0; i < minerals.length; i++) {
    const mineral = minerals[i];
    ret += p[pick][mineral];
  }
  return ret;
}

const picks = [1, 3, 2];
const minerals = [
  "diamond",
  "diamond",
  "diamond",
  "iron",
  "iron",
  "diamond",
  "iron",
  "stone",
];

const r = solution(picks, minerals);
console.log(r);

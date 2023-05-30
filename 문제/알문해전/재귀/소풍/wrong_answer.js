console.log(9 * 7 * 5 * 3 * 2 * 10);

function solution(n, areFriends) {
  const taken = Array(n).fill(false);
  return countPairings(taken, areFriends);
}

function countPairings(taken, areFriends) {
  const finished = taken.every((isTrue) => isTrue);
  if (finished) return 1;

  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!taken[i] && !taken[j] && areFriends[i][j]) {
        taken[i] = taken[j] = true;
        ret += countPairings(taken, areFriends);
        taken[i] = taken[j] = false;
      }
    }
  }
  return ret;
}

function solution(n, areFriends) {
  const taken = Array(n).fill(false);
  return countPairings(taken, areFriends);
}

function countPairings(taken, areFriends) {
  const firstFree = findFirstFree(taken);
  if (firstFree === -1) return 1;

  let res = 0;

  for (let i = firstFree + 1; i < n; i++) {
    if (!taken[i] && areFriends[firstFree][i]) {
      taken[firstFree] = taken[i] = true;
      res += countPairings(taken, areFriends);
      taken[firstFree] = taken[i] = false;
    }
  }

  return res;
}

function findFirstFree(taken) {
  return taken.findIndex((isTaken) => !isTaken);
}

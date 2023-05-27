function solution(scores) {
  const scoreWithIndex = scores
    .map((score, index) => ({ score, index }))
    .sort((a, b) => {
      if (a.score[0] === b.score[0]) {
        return a.score[1] - b.score[1];
      }
      return b.score[0] - a.score[0];
    });

  const candidateScoreWithIndex = [];
  let max_1 = scoreWithIndex[0].score[1];

  scoreWithIndex.forEach(({ score, index }) => {
    if (max_1 <= score[1]) {
      candidateScoreWithIndex.push({ score, index });
      max_1 = Math.max(max_1, score[1]);
    }
  });

  const sorted = candidateScoreWithIndex
    .map(({ score, index }) => ({ sum: score[0] + score[1], index }))
    .sort((a, b) => b.sum - a.sum);

  let answer = 1;
  let temp = 1;

  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    const next = sorted[i + 1];

    if (current.index === 0) return answer;
    if (!next) return -1;

    if (current.sum === next.sum) {
      temp += 1;
    } else {
      answer += temp;
      temp = 1;
    }
  }
}

const scores = [
  [1, 1],
  [3, 0],
  [1, 1],
];

const r = solution(scores);
console.log({ r });

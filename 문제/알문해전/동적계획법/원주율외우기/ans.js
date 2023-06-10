function solution(example) {
  const cache = Array(example.length)
    .fill()
    .map((_) => ({ value: -1 }));

  return memorize(0);

  function memorize(begin) {
    if (begin === example.length) return 0;

    const ret = cache[begin];
    if (ret.value !== -1) return ret.value;

    ret.value = Infinity;

    for (let L = 3; L <= 5; L++) {
      if (begin + L <= example.length) {
        ret.value = Math.min(
          ret.value,
          memorize(begin + L) + classify(example.slice(begin, begin + L))
        );
      }
    }
    return ret.value;
  }
}

function classify(pi) {
  if (new Set(pi).size === 1) return 1;

  let progressive = true;
  for (let i = 0; i < pi.length - 1; i++) {
    if (pi[i + 1] - pi[i] !== pi[1] - pi[0]) progressive = false;
  }

  if (progressive && pi[1] - pi[0] === 1) return 2;

  let cross = true;
  for (let i = 0; i < pi.length; i++) {
    if (pi[i] !== pi[i % 2]) cross = false;
  }

  if (cross) return 4;
  if (progressive) return 5;
  return 10;
}

const example = [1, 2, 3, 4, 1, 2, 3, 4];
const r = solution(example);
console.log(r);

function solution(dolls, n) {
  const psum = Array(dolls.length).fill(0);
  psum[0] = dolls[0];

  for (let i = 1; i < dolls.length; i++) {
    psum[i] = psum[i - 1] + dolls[i];
  }

  let ret = 0;

  for (let i = 0; i < dolls.length; i++) {
    for (let j = i; j < dolls.length; j++) {
      const end = psum[j];
      const start = i === 0 ? 0 : psum[i - 1];
      if ((end - start) % n === 0) ret++;
    }
  }

  return ret;
}

function solution2(dolls, n) {
  const psum = Array(dolls.length).fill(0);
  psum[0] = dolls[0];

  for (let i = 1; i < dolls.length; i++) {
    psum[i] = psum[i - 1] + dolls[i];
  }

  const cache = Array(dolls.length)
    .fill()
    .map((_) => ({ value: -1 }));

  function recursive(start) {
    if (start > dolls.length - 1) return 0;

    const ret = cache[start];
    if (ret.value !== -1) return ret.value;

    ret.value = 0;

    if (dolls[start] % n === 0) ret.value = 1 + recursive(start + 1);
    else ret.value = recursive(start);

    return ret.value;
  }

  return recursive(0);
}

const dolls = [1, 2, 3, 4];
const n = 1;

const r = solution2(dolls, n);
console.log(r);

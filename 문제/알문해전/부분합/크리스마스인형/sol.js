function solution(dolls, k) {
  const psum = Array(dolls.length + 1).fill(0);
  for (let i = 1; i < psum.length; i++) {
    psum[i] = (psum[i - 1] + dolls[i]) % k;
  }
}

function waysToBuy(psum, k) {
  const MOD = 20091101;
  let ret = 0;
  const count = new Array(k).fill(0);
  for (let i = 0; i < psum.length; i++) {
    count[psum[i]]++;
  }

  for (let i = 0; i < k; i++) {
    if (count[i] >= 2) {
      ret = (ret + (count[i] * (count[i] - 1)) / 2) % MOD;
    }
  }

  return ret;
}

function maxBuys(psum, k) {
  const ret = new Array(psum.length).fill(0);
  const prev = new Array(k).fill(-1);
  for (let i = 0; i < psum.length; i++) {
    if (i > 0) ret[i] = ret[i - 1];
    else ret[i] = 0;
    const loc = prev[psum[i]];
    if (loc !== -1) ret[i] = Math.max(ret[i], ret[loc] + 1);
    prev[psum[i]] = i;
  }
  return ret[ret.length - 1];
}

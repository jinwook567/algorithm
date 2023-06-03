let W, S;
const cache = [];

function match(w, s) {
  let pos = 0;
  while (
    pos < s.length &&
    pos < w.length &&
    (w[pos] === "?" || w[pos] === s[pos])
  ) {
    ++pos;
  }
  if (pos === w.length) {
    return pos === s.length;
  }
  if (w[pos] === "*") {
    for (let skip = 0; pos + skip <= s.length; ++skip) {
      if (match(w.substr(pos + 1), s.substr(pos + skip))) {
        return true;
      }
    }
    return false;
  }
  return false;
}

function matchMemoized(w, s) {
  if (cache[w][s] !== -1) {
    return cache[w][s];
  }
  while (s < S.length && w < W.length && (W[w] === "?" || W[w] === S[s])) {
    ++w;
    ++s;
  }
  if (w === W.length) {
    return (cache[w][s] = s === S.length);
  }
  if (W[w] === "*") {
    for (let skip = 0; skip + s <= S.length; ++skip) {
      if (matchMemoized(w + 1, s + skip)) {
        return (cache[w][s] = 1);
      }
    }
    return (cache[w][s] = 0);
  }
  return (cache[w][s] = 0);
}

function matchMemoized2(w, s) {
  if (cache[w][s] !== -1) {
    return cache[w][s];
  }
  if (w < W.length && s < S.length && (W[w] === "?" || W[w] === S[s])) {
    return (cache[w][s] = matchMemoized2(w + 1, s + 1));
  }
  if (w === W.length) {
    return (cache[w][s] = s === S.length);
  }
  if (W[w] === "*") {
    if (
      matchMemoized2(w + 1, s) ||
      (s < S.length && matchMemoized2(w, s + 1))
    ) {
      return (cache[w][s] = 1);
    }
  }
  return (cache[w][s] = 0);
}

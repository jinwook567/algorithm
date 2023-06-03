const wildCard = "*p*";
const word = "hellpo";

function compare(a, b) {
  if (a.length === 0 && b.length === 0) return true;
  if (b.length === 0 && a.every((v) => v === "*")) return true;
  if (a.length === 0 || b.length === 0) return false;

  if (a[0] === "?" || a[0] === b[0]) {
    return compare(a.slice(1), b.slice(1));
  }

  if (a[0] === "*") {
    return compare(a.slice(1), b) || compare(a, b.slice(1));
  }

  return false;
}

const n = Math.max(wildCard.length, word.length);

// -1, 0, 1
const cache = Array(n)
  .fill()
  .map((_) => Array(n).fill(-1));

function compare2(a, b) {
  if (a.length === 0 && b.length === 0) return 1;
  if (b.length === 0 && a.every((v) => v === "*")) return 1;
  if (a.length === 0 || b.length === 0) return 0;

  const len_a = len(a);
  const len_b = len(b);
  if (cache[len_a][len_b] !== -1) return cache[len_a][len_b];

  if (a[0] === "?" || a[0] === b[0]) {
    cache[len_a - 1][len_b - 1] = compare(a.slice(1), b.slice(1));
    return cache[len_a - 1][len_b - 1];
  }

  if (a[0] === "*") {
    cache[len_a - 1][len_b] = compare(a.slice(1), b);
    cache[len_a][len_b - 1] = compare(a, b.slice(1));
    return cache[len_a - 1][len_b] || cache[len_a][len_b - 1];
  }

  cache[len_a][len_b] = 0;
  return cache[len_a][len_b];
}

function len(a) {
  return a.length;
}

const r = compare2([...wildCard], [...word]);
console.log(r);

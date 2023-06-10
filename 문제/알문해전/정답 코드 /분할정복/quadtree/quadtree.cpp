const MAX_SIZE = 1024;
const decompressed = new Array(MAX_SIZE).fill(0).map(() => new Array(MAX_SIZE).fill(0));

function decompress(it, y, x, size) {
  const head = it.next().value;
  if (head === 'b' || head === 'w') {
    for (let dy = 0; dy < size; ++dy) {
      for (let dx = 0; dx < size; ++dx) {
        decompressed[y + dy][x + dx] = head;
      }
    }
  } else {
    const half = size / 2;
    decompress(it, y, x, half);
    decompress(it, y, x + half, half);
    decompress(it, y + half, x, half);
    decompress(it, y + half, x + half, half);
  }
}

function reverse(it) {
  const head = it.next().value;
  if (head === 'b' || head === 'w') {
    return head;
  }
  const ul = reverse(it);
  const ur = reverse(it);
  const ll = reverse(it);
  const lr = reverse(it);
  return 'x' + ll + lr + ul + ur;
}

function resize(original, sz) {
  if (sz === original.length) {
    return original;
  }
  const ret = new Array(sz).fill(0).map(() => new Array(sz).fill(0));
  const factor = sz / original.length;
  for (let i = 0; i < sz; i++) {
    for (let j = 0; j < sz; j++) {
      ret[i][j] = original[Math.floor(i / factor)][Math.floor(j / factor)];
    }
  }
  return ret;
}

function merge(ul, ur, ll, lr) {
  const ret = [];
  for (let i = 0; i < ul.length; i++) {
    ret.push(ul[i] + ur[i]);
  }
  for (let i = 0; i < ll.length; i++) {
    ret.push(ll[i] + lr[i]);
  }
  return ret;
}

function repr(it) {
  const head = it.next().value;
  if (head === 'b') {
    return ['#'];
  }
  if (head === 'w') {
    return ['.'];
  }
  const ul = repr(it);
  const ur = repr(it);
  const ll = repr(it);
  const lr = repr(it);
  const sz = Math.max(ul.length, ur.length, ll.length, lr.length);
  return merge(resize(ul, sz), resize(ur, sz), resize(ll, sz), resize(lr, sz));
}
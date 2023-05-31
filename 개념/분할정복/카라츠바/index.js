function normalize(num) {
  num.push(0);
  const size = num.length;
  for (let i = 0; i < size - 1; i++) {
    if (num[i] < 0) {
      const borrow = Math.ceil(Math.abs(num[i]) / 10);
      num[i + 1] -= borrow;
      num[i] += borrow * 10;
    } else {
      num[i + 1] += Math.floor(num[i] / 10);
      num[i] %= 10;
    }
  }
  while (num.length > 1 && num[num.length - 1] === 0) {
    num.pop();
  }
}

function multiply(a, b) {
  const c = Array(a.length + b.length + 1).fill(0);
  const A_tmpSize = a.length;
  const B_tmpSize = b.length;
  for (let i = 0; i < A_tmpSize; i++) {
    for (let j = 0; j < B_tmpSize; j++) {
      c[i + j] += a[i] * b[j];
    }
  }
  normalize(c);
  return c;
}

function addTo(a, b, k) {
  if (a.length < b.length + k) {
    a.length = b.length + k;
  }
  a.push(0);
  for (let i = a.length; i < a.length; i++) {
    a[i] = 0;
  }
  for (let i = 0; i < b.length; i++) {
    a[i + k] += b[i];
  }
  normalize(a);
}

function subFrom(a, b) {
  for (let i = 0; i < b.length; i++) {
    a[i] -= b[i];
  }
  normalize(a);
}

function karatsuba(a, b) {
  const an = a.length;
  const bn = b.length;
  if (an < bn) {
    return karatsuba(b, a);
  }
  if (an === 0 || bn === 0) {
    return [];
  }
  if (an <= 50) {
    return multiply(a, b);
  }
  const half = Math.floor(an / 2);

  const a0 = a.slice(0, half);
  const a1 = a.slice(half);
  const b0 = b.slice(0, Math.min(b.length, half));
  const b1 = b.slice(Math.min(b.length, half));

  const z2 = karatsuba(a1, b1);
  const z0 = karatsuba(a0, b0);

  addTo(a0, a1, 0);
  addTo(b0, b1, 0);
  const z1 = karatsuba(a0, b0);
  subFrom(z1, z0);
  subFrom(z1, z2);

  const ret = Array(z2.length + half * 2).fill(0);
  addTo(ret, z0, 0);
  addTo(ret, z1, half);
  addTo(ret, z2, half + half);
  return ret;
}

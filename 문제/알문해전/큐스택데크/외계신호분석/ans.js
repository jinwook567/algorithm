function optimized(signals, k) {
  let ret = 0;
  let tail = 0;
  let rangeSum = signals[0];

  for (let head = 0; head < signals.length; head++) {
    while (rangeSum < k && tail < signals.length - 1) {
      rangeSum += signals[++tail];
    }
    if (rangeSum === k) ret++;
    rangeSum -= signals[head];
  }
  return ret;
}

function optimized2(signals, k) {
  let ret = 0;
  let rangeSum = 0;
  const queue = [];

  for (let head = 0; head < signals.length; head++) {
    rangeSum += signals[head];
    queue.push(signals[head]);

    while (rangeSum > k) {
      rangeSum -= queue.shift();
    }

    if (rangeSum === k) ret++;
  }
  return ret;
}

const r = optimized([1, 4, 2, 1, 4, 3, 1, 6], 7);
console.log(r);

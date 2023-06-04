function lis(sequence) {
  if (check(sequence)) return sequence.length;

  let ret = 0;

  const len = sequence.length;
  for (let i = 0; i < len; i++) {
    const item = sequence[i];
    sequence.splice(i, 1);
    ret = Math.max(ret, lis(sequence));
    sequence.splice(i, 0, item);
  }

  return ret;
}

function check(arr) {
  if (arr.length === 0) return true;

  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (num >= arr[i]) return false;
    num = arr[i];
  }
  return true;
}

const r = lis([1, 2, 3, 1]);
console.log(r);

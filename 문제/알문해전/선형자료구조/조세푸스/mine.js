function solution(N, K) {
  const head = { index: 1 };
  let current = head;

  for (let i = 1; i < N; i++) {
    const obj = { index: i + 1 };
    current.next = obj;
    current = obj;
  }

  current.next = head;

  console.log(current);

  let cnt = N - 2;
  while (cnt > 0) {
    current.next = current.next.next;

    // K번 만큼 움직이다.
    for (let i = 0; i < K - 1; i++) {
      current = current.next;
    }

    cnt -= 1;
  }

  const ret = [-1, -1];

  for (let i = 0; i < 2; i++) {
    ret[i] = current.index;
    current = current.next;
  }

  return ret;
}

const r = solution(6, 3);
console.log(r);

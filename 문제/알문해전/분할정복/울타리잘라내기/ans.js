function solution(example) {}

const r = solution(example);
console.log(r);

function bruteForce(h) {
  let ret = 0;
  const n = h.length;

  for (let left = 0; left < n; left++) {
    let minHeight = h[left];
    for (let right = left; right < n; right++) {
      minHeight = Math.min(minHeight, h[right]);
      ret = Math.max(ret, (right - left + 1) * minHeight);
    }
  }

  return ret;
}

function solve(left, right, h) {
  // 기저 사례 (판자가 하나밖에 없는 경우)
  if (left === right) return h[left];

  const mid = Math.floor((left + right) / 2);

  let ret = Math.max(solve(left, mid, h), solve(mid + 1, right, h));

  let lo = mid;
  let hi = mid + 1;
  let height = Math.min(h[lo], h[hi]);

  ret = Math.max(ret, height * 2);

  // 중간 두 사각형에서 왼쪽과 오른쪽으로 한 칸씩 넓혀가며 사각형 전체를 덮을 때까지 진행한다.
  while (lo > left || hi < right) {
    if (hi < right && (lo === left || h[lo - 1] < h[hi + 1])) {
      hi++;
      height = Math.min(height, h[hi]);
    } else {
      lo--;
      height = Math.min(height, h[lo]);
    }

    ret = Math.max(ret, height * (hi - lo + 1));
  }
  return ret;
}

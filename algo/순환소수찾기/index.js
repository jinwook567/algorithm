function solution(a, b) {
  let iter = 0;
  while (a > 0) {
    if (iter++ === 1) console.log(".");
    if (iter > b) {
      console.log("순환 소수");
      return;
    }
    console.log(Math.floor(a / b));
    a = (a % b) * 10;
    // a % b 의 범위는 [0, b-1]까지임. 따라서 b번 이상 while문이 반복되면 중복되는 경우를 가지고 있는 것임. 그리고 이는 순환 소수임.
  }
}

const a = 3;
const b = 8;
const r = solution(1, 11);
console.log(r);

function solution(quadTree) {}

function split(quadTree) {
  if (quadTree.length === 4) {
    return [...quadTree];
  }
}

// 만약 x를 만나면, 4개가 다 빼질 떄 까지 그거를 split에 넣어라.

const r = split("wwbb");
console.log(r);

// ['w','b','b','w']

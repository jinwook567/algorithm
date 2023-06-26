const N = 3;
const x = [5, 5, 5];
const y = [5, 5, 5];
const radius = [15, 10, 5];

class TreeNode {
  constructor() {
    this.children = [];
  }
}

// 지금까지 찾은 가장 긴 leaf ~ leaf 경로의 길이를 저장
let longest;

// root를 root로 하는 서브트리의 높이를 반환한다.
function height(root) {
  // 각 자식을 루트로 하는 서브트리의 높이를 계산한다.
  let heights = [];
  for (let i = 0; i < root.children.length; i++) {
    heights.push(height(root.children[i]));
  }

  // 만약 자식이 한도 없다면 0을 반환한다.
  if (heights.length === 0) {
    return 0;
  }

  heights.sort();

  // root를 최상위 노드로 하는 경로를 고려하자
  if (heights.length >= 2) {
    longest = Math.max(
      longest,
      2 + heights[heights.length - 2] + heights[heights.length - 1]
    );
  }

  // 트리의 높이는 서브트리 높이의 최대치에 1을 더해 계산
  return heights[heights.length - 1] + 1;
}

// 두 노드 사이의 가장 긴 경로의 길이를 계산
function solve(root) {
  longest = 0;

  // 트리의 높이와 최대 leaf ~ leaf 경로 길이 중 큰 것을 선택
  let h = height(root);

  return Math.max(longest, h);
}

function sqr(x) {
  return x * x;
}

// 두 성벽 a, b의 중심점 간의 거리의 제곱 반환
function sqrdist(a, b) {
  return sqr(y[a] - y[b]) + sqr(x[a] - x[b]);
}

// 성벽 a가 성벽 b를 포함하는지 확인
function enclose(a, b) {
  return radius[a] > radius[b] && sqrdist(a, b) < sqr(radius[a] - radius[b]);
}

function isChild(parent, child) {
  if (!enclose(parent, child)) {
    return false;
  }

  for (let i = 0; i < N; i++) {
    if (
      i !== parent &&
      i !== child &&
      enclose(parent, i) &&
      enclose(i, child)
    ) {
      return false;
    }
  }

  return true;
}

function getTree(root) {
  const result = new TreeNode();

  for (let ch = 0; ch < N; ch++) {
    // ch 성벽이 root 성벽에 직접적으로 포함되어 있다면
    // 트리를 만들고 자손 목록에 추가한다.
    if (isChild(root, ch)) {
      result.children.push(getTree(ch));
    }
  }

  return result;
}

const tree = getTree({ children: [] });
console.log(tree);

class Tree {
  constructor() {
    this.children = [];
  }
}

function solution(example) {
  const rootArea = [
    [-1000, 2000],
    [2000, -1000],
  ];

  const areaList = [];
  example.forEach(([x, y, r]) => {
    areaList.push([
      [x - r, y + r],
      [x + r, y - r],
    ]);
  });

  const d = Array(areaList.length).fill(false);

  function getTree(rootArea) {
    const ret = new Tree();

    areaList.forEach((area, index) => {
      if (isChildren(rootArea, area)) {
        if (!d[index]) ret.children.push(getTree(area));
        d[index] = true;
      }
    });

    return ret;
  }

  const tree = getTree(rootArea);

  const ret = tree.children[0].children
    .map((node) => depth(node) + 1)
    .sort((a, b) => b - a);

  if (ret.length < 2) return ret[0];
  else return ret[0] + ret[1];
}

function depth(root) {
  if (root.children.length === 0) return 0;

  let ret = 0;

  root.children.forEach((node) => {
    ret = Math.max(ret, 1 + depth(node));
  });

  return ret;
}

function isChildren(areaParent, areaChildren) {
  const [leftTop_parent, rightBottom_parent] = areaParent;
  const [leftTop_children, rightBottom_children] = areaChildren;

  if (
    leftTop_parent[0] < leftTop_children[0] &&
    leftTop_parent[1] > leftTop_children[1]
  ) {
    if (
      rightBottom_parent[0] > rightBottom_children[0] &&
      rightBottom_parent[1] < rightBottom_children[1]
    ) {
      return true;
    }
  }

  return false;
}

const example = [
  [5, 5, 15],
  [5, 5, 10],
  [5, 5, 5],
];

// const example = [
//   [21, 15, 20],
//   [15, 15, 10],
//   [13, 12, 5],
//   [12, 12, 3],
//   [19, 19, 2],
//   [30, 24, 5],
//   [32, 10, 7],
//   [32, 9, 4],
// ];

const r = solution(example);
console.log(r);

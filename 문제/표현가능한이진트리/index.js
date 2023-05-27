function solution(numbers) {
  return numbers.map((number) => {
    let inOrderResult = number.toString(2);
    if (inOrderResult.length % 2 === 0) inOrderResult = "0" + inOrderResult;
    inOrderResult = inOrderResult.split("");

    const getLeftIndex = (index) => index * 2 + 1;
    const getRightIndex = (index) => index * 2 + 2;

    const result = [];
    function inOrder(index) {
      if (index >= inOrderResult.length) return;
      inOrder(getLeftIndex(index));
      result.push(index);
      inOrder(getRightIndex(index));
    }
    inOrder(0);

    const binaryTree = Array(inOrderResult.length).fill(null);
    for (let i = 0; i < result.length; i++) {
      const index = result[i];
      binaryTree[index] = inOrderResult[i];
    }

    return binaryTree.some((parent, index) => {
      const leftChild = binaryTree[getLeftIndex(index)];
      const rightChild = binaryTree[getRightIndex(index)];
      return parent === "0" && (leftChild === "1" || rightChild === "1");
    })
      ? 0
      : 1;
  });
}

const r = solution([423]);
console.log({ r });

// const visited = Array(inOrderResult.length).fill(false);
// function visitBinarySearch(tree, index) {
//   if (tree[index] === undefined) return;
//   visited[index] = true;
//   if (tree[index] === "0") return;

//   visitBinarySearch(tree, getLeftIndex(index));
//   visitBinarySearch(tree, getRightIndex(index));
// }

// visitBinarySearch(binaryTree, 0);

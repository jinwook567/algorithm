function makeTree(preorder, inorder) {
  if (preorder.length === 0) return;
  const root = preorder[0];

  const rootIndex = inorder.findIndex((v) => v === root);

  const inorder_left = inorder.slice(0, rootIndex);
  const inorder_right = inorder.slice(rootIndex + 1);

  const preorder_left = preorder.slice(1, rootIndex + 1);
  const preorder_right = preorder.slice(rootIndex + 1);

  makeTree(preorder_left, inorder_left);
  makeTree(preorder_right, inorder_right);

  console.log(root);
}

const preorder = [27, 16, 9, 12, 54, 36, 72];
const inorder = [9, 12, 16, 27, 36, 54, 72];

makeTree(preorder, inorder);

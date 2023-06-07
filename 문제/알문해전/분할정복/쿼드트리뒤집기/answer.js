let idx = 0;
let times = 0;

function reverse_quadtree(quadtree) {
  times++;
  const head = quadtree[idx];
  idx += 1;
  if (head === "b" || head === "w") {
    return head;
  }
  const upperLeft = reverse_quadtree(quadtree);
  const upperRight = reverse_quadtree(quadtree);
  const lowerLeft = reverse_quadtree(quadtree);
  const lowerRight = reverse_quadtree(quadtree);

  return "x" + lowerLeft + lowerRight + upperLeft + upperRight;
}

const r = reverse_quadtree("xbwxwbbwb");
console.log(times);

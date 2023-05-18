function solution(numbers) {
  return numbers.map((number) => {
    const binary = number.toString(2);

    const floor = getFloor(binary.length);
    const treeBinary = makeTreeBinary(binary, getNodeCount(floor));

    const rootIndex = getRootIndex(treeBinary);

    let flag = true;
    function validate(binary, floor, index) {
      if (floor === 1) return;

      const leftChildIndex = index - getNodeCount(floor - 2) - 1;
      const rightChildIndex = index + getNodeCount(floor - 2) + 1;

      if (
        binary.charAt(index) === "0" &&
        (binary.charAt(leftChildIndex) === "1" || binary.charAt(rightChildIndex) === "1")
      ) {
        flag = false;
        return;
      }

      validate(binary, floor - 1, leftChildIndex);
      validate(binary, floor - 1, rightChildIndex);
    }

    validate(treeBinary, floor, rootIndex);
    return flag ? 1 : 0;
  });
}

function makeTreeBinary(binary, count) {
  let result = binary;
  for (let i = 0; i < count - binary.length; i++) {
    result = "0" + result;
  }
  return result;
}

function getChildNodeCount(myFloor) {
  return getNodeCount(myFloor - 1);
}

function getRootIndex(binary) {
  return Math.floor(binary.length / 2);
}

function getFloor(nodeCount) {
  return nodeCount.toString(2).length;
}

function getNodeCount(floor) {
  if (floor === 0) return 0;
  let byte = "";
  for (let i = 0; i < floor; i++) {
    byte += "1";
  }
  return parseInt(byte, 2);
}

const r = solution([42]);
console.log({ r });
function newFunction() {
  return (binary) => {
    return Math.floor(binary.lenght / 2);
  };
}

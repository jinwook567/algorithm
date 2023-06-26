function solution(example) {
  const stack = [];

  const open = ["(", "{", "["];
  const close = [")", "}", "]"];

  for (let i = 0; i < example.length; i++) {
    console.log(stack);
    if (open.includes(example[i])) stack.push(example[i]);
    else {
      const closeIndex = close.findIndex((v) => v === example[i]);
      const last = stack.pop();
      const openIndex = open.findIndex((v) => v === last);
      if (closeIndex !== openIndex) return "NO";
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

const example = "({}[(){}])";
const r = solution(example);
console.log(r);

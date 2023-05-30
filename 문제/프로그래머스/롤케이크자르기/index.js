function solution(topping) {
  let ans = 0;

  const left = new Set();
  const right = map(topping);

  for (let i = 0; i < topping.length; i++) {
    left.add(topping[i]);
    right.delete(topping[i]);
    if (left.size === right.size) ans++;
  }
  return ans;
}

function map(arr) {
  const m = new Map();
  arr.forEach((v) => addItem(m, v));

  return {
    delete(a) {
      m.set(a, m.get(a) - 1);
      if (m.get(a) === 0) m.delete(a);
      return m;
    },

    get size() {
      return m.size;
    },
  };
}

function addItem(map, a) {
  map.set(a, map.has(a) ? map.get(a) + 1 : 1);
  return map;
}

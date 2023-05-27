class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.queue = [];
  }

  enqueue(data) {
    this.queue[this.rear++] = data;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(n, edge) {
  const d = Array(n + 1).fill(Infinity);
  const visited = Array(n + 1).fill(false);
  const graph = Array(n + 1)
    .fill()
    .map((_) => []);

  edge.forEach(([start, end]) => {
    graph[start].push(end);
    graph[end].push(start);
  });

  d[0] = 0;
  visited[0] = true;

  const queue = new Queue();

  queue.enqueue({ len: 0, node: 1 });
  visited[1] = true;

  while (queue.size() > 0) {
    const { len, node } = queue.dequeue();

    graph[node].forEach((end) => {
      d[node] = Math.min(d[node], len);
      if (!visited[end]) {
        visited[end] = true;
        queue.enqueue({ len: len + 1, node: end });
      }
    });
  }

  const max = Math.max(...d);
  return d.filter((v) => v === max).length;
}

const n = 6;
const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

solution(n, edge);

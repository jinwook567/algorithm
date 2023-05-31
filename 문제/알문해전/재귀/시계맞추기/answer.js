const INF = 9999;
const SWITCHES = 10;
const CLOCKS = 16;

// linked[i][j] ='x': i번 스위치와 j번 시계가 연결되어 있다.
// linked[i][j] ='.': i번 스위치와 j번 시계가 연결되어 있지 않다.
const linked = [
  "xxx.............",
  "...x...x.x.x....",
  "....x.....x...xx",
  "x...xxxx........",
  "......xxx.x.x...",
  "x.x...........xx",
  "...x..........xx",
  "....xx.x......xx",
  ".xxxxx..........",
  "...xxx...x...x..",
];

// 모든 시계가 12시를 가리키고 있는지 확인한다.
function areAligned(clocks) {
  for (let i = 0; i < CLOCKS; i++) {
    if (clocks[i] !== 12) {
      return false;
    }
  }
  return true;
}

// switch번 스위치를 누른다.
function push(clocks, swtch) {
  for (let clock = 0; clock < CLOCKS; ++clock) {
    if (linked[swtch][clock] === "x") {
      clocks[clock] += 3;
      if (clocks[clock] === 15) {
        clocks[clock] = 3;
      }
    }
  }
}

// ClockBoard: 현재 시계들의 상태
// swtch: 이번에 누를 스위치의 번호
// 가 주어질 때, 남은 스위치들을 눌러서 clocks를 12시로 맞출 수 있는 최소 횟수를 반환한다.
// 만약 불가능하다면 INF이상의 큰 수를 반환한다.
function solve(clocks, swtch) {
  if (swtch === SWITCHES) {
    return areAligned(clocks) ? 0 : INF;
  }
  // 이 스위치를 0번 누르는 경우부터 세 번 누르는 경우까지를 모두 시도한다.
  let ret = INF;
  for (let cnt = 0; cnt < 4; ++cnt) {
    ret = Math.min(ret, cnt + solve(clocks, swtch + 1));
    push(clocks, swtch);
  }

  // push(clocks, swtch)가 4번 호출되었으니 clocks는 원래와 같은 상태가 된다.
  return ret;
}

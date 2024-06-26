# 1. 문제를 익숙한 용어로 재정의한다.

- 학생들은 두명씩 짝을 지어야한다.
- 친구 여부가 주어진다.
- 짝을 지을 수 있는 경우의 수를 계산하라.
- 조합으로 계산해야한다. 짝을 정하는 순서는 영향이 없다.

# 2. 어떻게 해결할지 계획을 세운다.

- 짝을 지을 수 있는 모든 방법에 대해서 생각해본다. (완전탐색)
- n은 10 이하로 충분히 작다. 시간 복잡도에 대한 검증은 3단계에서 서술한다.
- 완전 탐색을 가장 효율적으로 수행할 수 있는 알고리즘은 재귀이다.
  - 문제를 선언한다. 함수가 해결하고자 하는 바를 의마한다. 문제에서 구하고자 하는 바와 대부분 일치한다. : 매칭이 안된 인원 목록, 친구 목록이 주어졌을 때 짝 지을 수 있는 경우의 수
  - 가장 작은 문제 해결 단위를 생각한다. (기저케이스) : 매칭이 안된 인원 목록에서 모두 매칭이 되었다면, 짝 지을 수 있는 것이다. 이 때 경우의 수는 1이다.
  - 문제를 분할하고, 재귀를 이용하여 답을 구한다. : 재귀의 결과물을 더해나가야 한다. 기저 케이스에서 1을 반환하므로, 재귀의 결과물을 더하면 모든 케이스의 개수이다.
- 우리는 짝을 정하는 개수에서, 중복된 정답을 제거하거나, 중복이 발생하지 않도록 알고리즘을 설계해야한다.
  - `(철수, 영희), (미영, 민수)` 와 `(미영, 민수) , (철수, 영희)` 와 `(민수, 미영) , (철수 영희)`는 동일한 정답이다.
  - 항상 특정 형태를 갖는 답만을 센다.
  - 사전순으로 가장 작은 형태의 답만을 고려한다.
  - 매칭이 안된 친구 목록에서 가장 작은 것을 찾고, 자신보다 큰 친구들을 전부 살펴보면서 만약 친구라면 재귀 함수를 실행시킨다.
  - 자신보다 큰 친구만 살펴보는 이유는, 자신보다 작은 경우는 이미 카운팅 되었기 때문이다.

# 3. 계획을 검증한다.

- 최악의 경우는 모든 인원이 서로 친구일 때이다. 이 떄를 기준으로 시간 복잡도를 검증해본다.
- `9(첫 번째 재귀의 루프) * 7(두 번째 재귀의 루프) * 5 * 3 * 1`
- 2씩 감소하는 이유는, 2명씩 매칭이 되므로. 곱하는 이유는 트리의 말단 노드의 개수를 구하는 알고리즘과 같기 때문.

# 4. 프로그램을 구현한다.

- 매칭이 되었는지 여부를 array로 선언한다.
- array의 index는 사람을 의미한다.
- 재귀 함수를 만들고, 이를 활용하여 값을 리턴한다.

# 5. 어떻게 풀었는지 돌아보고, 개선할 방법이 있는지 찾아본다.

- 나의 경우, 중복된 경우를 전부 카운팅 했었고, 중복된 경우를 없애주기 위해서 중복이 될 수 있는 경우의 수를 구하고 이를 나누어주는 방식을 활용했다.
- 하지만 특정 경우만 고려하면, 중복된 경우의 수가 없는 것을 의미한다. 매우 유용한 스킬을 습득했다.
- 재귀는 사이드 이펙트를 만들지 않고, 자신으로 끝나야한다. 만일 사이드 이펙트를 만드는 방법으로밖에 만들 수 없다면, 그것은 재귀를 잘못 설계한 것이다.
- 변수나 함수의 이름을 너무 포괄적으로 지으면 안된다. `findFirst, first` 라는 함수명과 변수명보다는 `findFirstFree, firstFree` 라는 함수명과 변수명을 사용하여  
  해당 함수가 아직 매칭이 안된 사람이라는 것을 내포하고 있어야한다.
- 재귀에 대한 시간 복잡도를 오해하면 안된다. 재귀 함수 내부에서 재귀 함수가 n번 호출된다면 n^m 시간 복잡도를 가지지만, 한번이라면 그렇지 아니하다.

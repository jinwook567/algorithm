---
category: 누적합
url: https://school.programmers.co.kr/learn/courses/30/lessons/161988
---

처음에는 투포인터로 문제를 해결하려고 하였으나, 투포인터의 경우 정확히 구간합이 최대인 구간을 알 수 없다.
하지만 누적합 알고리즘을 사용하면 구간합이 최대인 구간을 쉽게 알 수 있다.

(i는 i번쨰 수열까지의 누적합이라고 할 때) (d[i] - (수열의 최소 누적합. 또는 0 단 i보다 작아야함. ))

배열을 순회하면서 최솟값을 메모해놓으면 O(n)의 시간 복잡도로 최댓값을 구할 수 있다.
0을 넣은 이유는 안빼는 경우도 포함해야하기 때문이다. (처음부터 끝까지 모든 구간을 포함한다면.)

마지막으로 함수를 합성하는 함수를 만들어서 코드 가독성을 높였다.

---
slug: "/boj/25238"
date: "2022-09-17"
title: "[백준] 25238 - 가희와 방어율 무시"
tags:
  - "BOJ"
  - "Math"
  - "Algorithm"
description: "백준 온라인 저지 25238번 가희와 방어율 무시 설명 및 풀이"
---

## 문제 링크
[25238번: 가희와 방어율 무시 (acmicpc.net)](https://www.acmicpc.net/problem/25238)

## 코드
```cpp
#include <iostream>

int main() {
    int a, b;
    std::cin >> a >> b;
    std::cout << (a * ((100 - b) / 100.0) < 100);
}
```

## 풀이 설명

이 문제는 해당 값이 입력한 퍼센트만큼 감소하였을때 100 미만이라면 1 아니라면 0을 출력하는 문제이다
몬스터의 방어력이 A, 방어력 무시 비율이 B라고 하면 계산 공식은 다음과 같다.

$
\begin{cases}
   1 &\text{if } A * \frac{100-B}{100}< 100\\
   0 &\text{else } d
\end{cases}
$

100% 에서 방어력 비율을 빼면 실제 몬스터가 입는 데미지 비율이 나온다. 거기서 비율은 0 ~ 100% 라서 0 ~ 1 로 바꿔주고 몬스터 방어력을 곱하면 실제 남아 있는 방어력 비율이 나온다.

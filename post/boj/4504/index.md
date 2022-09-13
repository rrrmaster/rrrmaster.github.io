---
slug: "/boj/4504"
date: "2022-09-13"
title: "[백준] 4504 - 배수 찾기"
tags:
  - "BOJ"
  - "Algorithm"
description: "백준 온라인 저지 4504번 배수 찾기 문제이풀이"
---

## 문제 링크
[4504번: 배수 찾기 (acmicpc.net)](https://www.acmicpc.net/problem/4504)

## 코드
```cpp
#include <iostream>


int main() {
    int n, a;
    std::cin >> n;

    while (std::cin >> a && a) {
        printf("%d is%s a multiple of %d.\n", a, (a % n == 0 ? "" : " NOT"), n);
    }
}
```

## 풀이 설명


이 문제는 해당 숫자가 N의 배수인지 체크하는 문제이다.
첫 입력에는 N을 주워주고 그 다음에는 정수 값들이 입력이 된다.
0 이 입력이 되면 프로그램 종료 0이 아닌 정수라면 N의 배수인지 확인하여 문제 요구에 맞는 출력을 하면 된다.


N의 배수는 다음과 같이 체크했다.  
$a \mod N ==0$


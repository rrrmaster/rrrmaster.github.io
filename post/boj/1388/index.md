---
slug: "/boj/1388"
date: "2022-09-13"
title: "[백준] 1388 - 바닥 장식"
tags:
  - "BOJ"
  - "Algorithm"
description: "백준 온라인 저지 1388번 바닥 장식 문제 풀이"
---

## 문제 링크
[1388번: 바닥 장식 (acmicpc.net)](https://www.acmicpc.net/problem/1388)

## 코드
```cpp
#include <iostream>

void vertical(int x, int y, int h, char map[][101], bool visited[][101])
{
	visited[y][x] = true;
	if (y > 0 && map[y - 1][x] == '|' && !visited[y - 1][x])
		vertical(x, y - 1, h, map, visited);
	if (y < h - 1 && map[y + 1][x] == '|' && !visited[y + 1][x])
		vertical(x, y + 1, h, map, visited);

	return;
}

void horizontal(int x, int y, int w, char map[][101], bool visited[][101])
{
	visited[y][x] = true;
	if (x > 0 && map[y][x - 1] == '-' && !visited[y][x - 1])
		horizontal(x - 1, y, w, map, visited);
	if (x < w - 1 && map[y][x + 1] == '-' && !visited[y][x + 1])
		horizontal(x + 1, y, w, map, visited);

	return;
}

int main()
{
	int n, m;
	int count = 0;
	char map[101][101] = {};
	bool visited[101][101] = {};

	std::cin >> n >> m;
	for (int y = 0; y < n; y++)
	{
		for (int x = 0; x < m; x++)
		{
			std::cin >> map[y][x];
		}
	}
	for (int y = 0; y < n; y++)
	{
		for (int x = 0; x < m; x++)
		{
			if (visited[y][x])
				continue;
			
			if (map[y][x] == '|')
				vertical(x, y, n, map, visited);
			else
				horizontal(x, y, m, map, visited);
			
			count += 1;
		}
	}
	std::cout << count;
}
```

## 풀이 설명

이 문제는 **그래프 탐색** 문제이다.  
입력은 `|`, `-`이 있고 `|` 는 **상하 이동** `-`는 **좌우 이동**
으로 가능하다.

그렇다면

|를 만나면 상하로만 그래프 탐색을 진행하고 -를 만나면 좌우로 탐색을 진행하면 된다.

그리고 맵의 정보는 map, 방문한 정보는 visited이다.
사실 x,y를 제외한 매개변수를 전역변수로 만들어서 사용해도 상관이 없다.

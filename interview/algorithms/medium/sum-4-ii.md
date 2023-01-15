---
tags: [Medium, 'Hash Table', 'Binary Search']
---

# Sum 4 (ii)

Given four lists A, B, C, D of integer values, compute how many tuples `(i, j, k, l)` there are such that `A[i] + B[j] + C[k] + D[l]` is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

**Example:**

```
Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
```

<details>
<summary>Solution</summary>

```javascript
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
	var map = {};
	var res = 0;
	var key = 0;

	for (var i = 0; i < A.length; i++) {
		for (var j = 0; j < B.length; j++) {
			key = A[i] + B[j];
			map[key] = (map[key] || 0) + 1;
		}
	}

	for (var i = 0; i < C.length; i++) {
		for (var j = 0; j < D.length; j++) {
			key = -(C[i] + D[j]);
			res += map[key] || 0;
		}
	}

	return res;
};
```

**Complexity:**

-   Time complexity: O(n^2).
-   Space complexity: O(1).

</details>
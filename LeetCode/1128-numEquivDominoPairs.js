// https://leetcode.com/problems/number-of-equivalent-domino-pairs/

// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

// Example 1:

// Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
// Output: 1
// Example 2:

// Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
// Output: 3

// Constraints:

// 1 <= dominoes.length <= 4 * 104
// dominoes[i].length == 2
// 1 <= dominoes[i][j] <= 9

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let count = 0;
  let map = {};
  for (let i = 0; i < dominoes.length; i++) {
    let [a, b] = dominoes[i];
    let key = a > b ? `${b}${a}` : `${a}${b}`;
    if (key in map) {
      map[key] = map[key] + 1;
    } else {
      map[key] = 1;
    }
  }
  for (let k in map) {
    let n = map[k];
    count += (n * (n - 1)) / 2;
  }
  return count;
};

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
console.log(
  numEquivDominoPairs([
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 2],
  ])
);

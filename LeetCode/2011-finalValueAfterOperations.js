// 2011. Final Value of Variable After Performing Operations
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.
// Example 3:

// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.

// Constraints:

// 1 <= operations.length <= 100
// operations[i] will be either "++X", "X++", "--X", or "X--".
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  // Method 1: Using For Loop and If Statement
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '++X' || operations[i] === 'X++') {
      x++;
    } else if (operations[i] === '--X' || operations[i] === 'X--') {
      x--;
    }
  }
  return x;

  // Method 2: Using Dictionary
  let dict = {
    '++X': 1,
    'X++': 1,
    '--X': -1,
    'X--': -1,
  };
  let result = 0;
  operations.forEach(function (op) {
    result += dict[op];
  });

  return result;
};
console.time('finalValueAfterOperations');
console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));
console.log(finalValueAfterOperations(['++X', '++X', 'X++']));
console.log(finalValueAfterOperations(['X++', '++X', '--X', 'X--']));
console.timeEnd('finalValueAfterOperations');

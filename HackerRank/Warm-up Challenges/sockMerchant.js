// https://www.hackerrank.com/challenges/sock-merchant/problem

// Sales by Match

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// Explanation

// sock.png

// There are three pairs of socks.

function sockMerchant(n, ar){
  // Method 1 - By sorting the array
  ar = ar.sort((a, b) => a - b);
  let count = 0;
  for(i = 1; i < n; i++) {
    if(ar[i] === ar[i - 1]) {
      count++;
      i++;
    }
  }
  return count;

  // Method 2 - By using a hash table
  let map ={};
  for(let i = 0; i < n; i++) {
    if(map[ar[i]]) {
      map[ar[i]]++;
    } else {
      map[ar[i]] = 1;
    }
  }
  let pairs = 0;
  for(let key in map) {
    pairs += Math.floor(map[key] / 2);
  }
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
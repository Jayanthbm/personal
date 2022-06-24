// 43. Multiply Strings
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 
// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 const DICT = {
	"0": 0,
	"1": 1,
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	"9": 9
}

function addZeros(string, number, position) {
	for (let i = 0; i < number; i++) {
		if (position == 'start') {
			string = `0${string}`;
		}
		if (position == 'end') {
			string = `${string}0`;
		}
	}
	return string;
}

function addStrings(num1, num2) {
	let l1 = num1.length;
	let l2 = num2.length;
	if (l1 < l2) {
		num1 = num1.padStart(l2, '0');
	}

	if (l2 < l1) {
		num2 = num2.padStart(l1, '0');
	}
	let result = '';
	let carry = 0;
	for (let i = num1.length - 1; i > -1; i--) {
		let tmpSum = DICT[num1[i]] + DICT[num2[i]] + carry;
		if (tmpSum > 9) {
			carry = 1;
			result = `${tmpSum.toString()[1]}${result}`;
		} else {
			carry = 0;
			result = `${tmpSum}${result}`;
		}
	}
	return carry == 1 ? `${carry}${result}` : result;
}

var multiply = function(num1, num2) {
    if(num1 == '0') return '0';
    if(num2 == '0') return '0';
    let resultArray = [];

	let append = 0;
	for (i = num2.length - 1; i > -1; i--) {
		let carry = 0;
		let resString = '';
		for (j = num1.length - 1; j > -1; j--) {
			if (j == 0) {
				res = DICT[num2[i]] * DICT[num1[j]] + carry;
				console.log(res);
				resString = `${res}${resString}`;
			} else {
				res = DICT[num2[i]] * DICT[num1[j]] + carry;
				console.log(res);
				carry = Math.floor(res / 10);
				lastNumber = res % 10;
				console.log(lastNumber)
				resString = `${lastNumber}${resString}`;
			}
		}
		resultArray.push(addZeros(resString, append, 'end'))
		append += 1
	}
	for (let k = 1; k < resultArray.length; k++) {
		resultArray[k] = addStrings(resultArray[k - 1], resultArray[k])
	}
	return resultArray[resultArray.length - 1];
};


let num1 = "123";
let num2 = "435";

console.log(multiply(num1, num2));
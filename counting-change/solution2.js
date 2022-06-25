/**
 * Counting Change Combinations
 * V2
 * Faster Solution
 * 2022/06/18
 * Author: Albert Hattingh
 */

function countChange(target, coins) {
	const cache = {};

	function findCombinations(index, amount) {
		if (amount === target) return 1;
		if (amount > target) return 0;
		if (index === coins.length) return 0;
		if (cache[`${index}-${amount}`]) return cache[`${index}-${amount}`];

		cache[`${index}-${amount}`] =
			findCombinations(index, amount + coins[index]) + findCombinations(index + 1, amount);

		return cache[`${index}-${amount}`];
	}

	return findCombinations(0, 0);
}

// const test = countChange(4, [2, 1]); // => 3
// const test = countChange(10, [5, 2, 3]); // => 4
const test = countChange(11, [5, 7]); //  => 0

console.log(test);

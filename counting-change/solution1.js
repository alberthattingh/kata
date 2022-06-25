/**
 * Counting Change Combinations
 * V1
 * Slow Solution
 * 2022/06/18
 * Author: Albert Hattingh
 */

function countChange(money, coins) {
	const result = findCombinations(money, coins);
	return result.size;
}

function findCombinations(money, coins, previous = []) {
	if (money < 0) return [];
	if (money === 0) return [previous.sort().join('+')];

	const validCoins = coins.filter((coin) => coin <= money);
	let results = new Set();

	for (const coin of validCoins) {
		const combinations = findCombinations(money - coin, validCoins, [...previous, coin]);
		results = new Set([...results.values(), ...combinations]);
	}

	return results;
}

// const test = countChange(4, [2, 1]); // => 3
const test = countChange(10, [5, 2, 3]); // => 4
// const test = countChange(11, [5, 7]); //  => 0

console.log(test);

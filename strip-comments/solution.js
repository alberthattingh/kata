/**
 * Strip Comments
 * 2022/06/25
 * Author: Albert Hattingh
 */

function solution(input, markers) {
	const lines = input.split('\n');
	const markerRegex = new RegExp(`\\${markers.join('|\\')}`);

	return lines.map((line) => line.split(markerRegex)[0].trim()).join('\n');
}

const test = solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']);
console.log(test);

/**
 * Beeramid Solution
 * 2022/06/17
 * Author: Albert Hattingh
 */
function beeramid(bonus, price) {
    const totalBeers = bonus / price;

    let level = 0,
        beersUsed = 0;
    while (beersUsed <= totalBeers) {
        level++;
        beersUsed += level * level;
    }

    return level > 0 ? level - 1 : 0;
}

const test = beeramid(5000, 3);
console.log(test);

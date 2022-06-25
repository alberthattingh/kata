/**
 * Codewars Ranking Solution
 * 2022/06/17
 * Author: Albert Hattingh
 */

class User {
	constructor() {
		this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
		this.rank = this.ranks[0];
		this.progress = 0;
	}

	incProgress(activityRank) {
		const topRank = this.ranks[this.ranks.length - 1];
		const bottomRank = this.ranks[0];
		const rankIndex = this.ranks.indexOf(this.rank);
		const activityIndex = this.ranks.indexOf(activityRank);

		if (activityRank === 0 || activityRank > topRank || activityRank < bottomRank) {
			throw Error('Invalid activity rank');
		}

		if (this.rank === topRank) return;

		if (activityRank === this.rank) {
			this.progress += 3;
		} else if (activityRank > this.rank) {
			const diff = activityIndex - rankIndex;
			this.progress += 10 * diff * diff;
		} else if (activityRank === this.ranks[rankIndex - 1]) {
			this.progress += 1;
		}

		while (this.progress >= 100) {
			this.progress -= 100;
			this.incRank();

			if (this.rank === topRank) {
				this.progress = 0;
			}
		}
	}

	incRank() {
		const rankIndex = this.ranks.indexOf(this.rank);
		if (rankIndex !== this.ranks.length - 1) {
			this.rank = this.ranks[rankIndex + 1];
		}
	}
}

const testUser = new User();
testUser.incProgress(-7);
testUser.incProgress(-8);

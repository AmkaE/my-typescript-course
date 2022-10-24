class Person {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	get fullName() {
		return `${this.first} ${this.last}`;
	}
}

class Player extends Person {
	static description = 'This is a class used to create players.';

	#score = 0;
	#numLives = 10;

	constructor(first, last, username) {
		super(first, last);
		this.username = username;
	}

	loseLife() {
		this.#numLives -= 1;
	}

	set updateScore(newScore) {
		this.#score = newScore;
	}

	get score() {
		return this.#score;
	}

	get numLives() {
		return this.#numLives;
	}
}

const player1 = new Player('Amka', 'Limbu', 'Amka21');
// player1.loseLife();
// console.log(player1.fullName);
// console.log(player1.score);
// console.log(player1.numLives);
// player1.updateScore = 10;
// console.log(player1.score);
// console.log(Player.description);

console.log(player1);

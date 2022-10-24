// class Person {
// 	public readonly first: string;
// 	readonly last: string;

// 	private score: number = 0;
// 	private numLives: number = 10;

// 	constructor(first: string, last: string) {
// 		this.first = first;
// 		this.last = last;
// 	}

// 	get fullName() {
// 		return `${this.first} ${this.last}`;
// 	}
// }

// class Person {
// 	protected id: number = 92302;
// 	constructor(public first: string, public last: string) {}

// 	get fullName() {
// 		return `${this.first} ${this.last}`;
// 	}
// }

// class Player extends Person {
// 	static description = 'This is a class used to create players.';

// 	private _score: number = 0;
// 	private _numLives: number = 10;

// 	constructor(
// 		public first: string,
// 		public last: string,
// 		public username: string,
// 	) {
// 		super(first, last);
// 		this.username = username;
// 	}

// 	loseLife() {
// 		this._numLives -= 1;
// 	}

// 	set updateScore(newScore: number) {
// 		this._score = newScore;
// 	}

// 	get score() {
// 		return this._score;
// 	}

// 	get numLives() {
// 		return this._numLives;
// 	}

// 	updateId() {
// 		this.id++;
// 	}
// }

// const player1 = new Player('Amka', 'Limbu', 'Amka21');

// console.log(player1);
// player1.updateId();

// abstract class

abstract class Shape {
	abstract area: number;
}

class Square extends Shape {
	constructor(public side: number) {
		super();
	}

	get area(): number {
		return this.side * this.side;
	}
}

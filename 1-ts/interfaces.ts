interface Point {
	x: number;
	y: number;
}

const pt: Point = { x: 0, y: 0 };

interface Human {
	firstName: string;
	lastName: string;
}

interface Person extends Human {
	nickName?: string;
	introduce?: () => void;
}

// not redeclaration, but adding a property
interface Person {
	readonly id: number;
}

const amka: Person = {
	id: 54994,
	firstName: 'Amka',
	lastName: 'Limbu',
	nickName: 'AmkaE',
	introduce() {
		console.log(`Hello, I'm ${this.firstName}, ${this.lastName}`);
	},
};

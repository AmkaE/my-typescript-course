// type predicates
interface Cat {
	name: string;
	meow(): void;
}

interface Dog {
	name: string;
	bark(): void;
}

function isCat(animal: Cat | Dog): animal is Cat {
	return (animal as Cat).meow !== undefined;
}

function makeNoise(animal: Cat | Dog) {
	if (isCat(animal)) {
		animal.meow();
	} else {
		animal.bark();
	}
}

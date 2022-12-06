// instanceof type narrowing

class Animal {
	constructor(public name: string, public age: number) {}

	public eat() {
		console.log(`${this.name} is eating`);
	}
}

class Cat extends Animal {
	constructor(name: string, age: number) {
		super(name, age);
	}

	public meow() {
		console.log(`${this.name} is meowing`);
	}
}

class Dog extends Animal {
	constructor(name: string, age: number) {
		super(name, age);
	}

	public bark() {
		console.log(`${this.name} is barking`);
	}
}

const cat = new Cat('Mimi', 4);
const dog = new Dog('Rex', 5);

function getAnimalInfo(animal: Cat | Dog) {
	if (animal instanceof Cat) {
		animal.meow();
	}
	if (animal instanceof Dog) {
		animal.bark();
	}
}

getAnimalInfo(cat);
getAnimalInfo(dog);

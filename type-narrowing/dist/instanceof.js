"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}
class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    meow() {
        console.log(`${this.name} is meowing`);
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}
const cat = new Cat('Mimi', 4);
const dog = new Dog('Rex', 5);
function getAnimalInfo(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog) {
        animal.bark();
    }
}
getAnimalInfo(cat);
getAnimalInfo(dog);

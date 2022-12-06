"use strict";
function isCat(animal) {
    return animal.meow !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}

"use strict";
function getRandomElement(list) {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
console.log(getRandomElement([1, 2, 3, 4]));
console.log(getRandomElement([true, false]));
console.log(getRandomElement([[1], [2]]));
console.log(getRandomElement(['de', 'desa', 'des', 'desa']));
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const data1 = {
    player: { name: 'Limbu' },
};
const data2 = {
    levels: {
        1: [99, 85, 90],
        2: [194, 153, 180],
        3: [239, 285, 290],
    },
};
const comboObj = merge(data1, data2);
console.log(comboObj);
function makeEmptyArr() {
    return [];
}
const strings = makeEmptyArr();
strings.push('Hello');
const nums = makeEmptyArr();
nums.push(1);
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
    remove() {
        this.queue.pop();
    }
}
const songs = new Playlist();
const videos = new Playlist();
videos.add({
    title: 'My First Video',
    creator: 'Limbu',
    resolution: '8k',
});
videos.add({
    title: 'My Secondss Video',
    creator: 'Limbu',
    resolution: '8k',
});
console.log(videos.queue);
videos.remove();

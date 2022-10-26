// const nums: number[] = [];
// const nums: Array<number> = [];
// const colors: Array<string> = [];

// const username = document.querySelector<HTMLInputElement>('#username')!;
// const btn = document.querySelector<HTMLButtonElement>('.btn')!;

// username.value = 'Hello';
// btn.setAttribute('id', 'btn');

// takes string argument and returns string value
// function stringIdentity(item: string): string {
// 	return item;
// }

// // takes number argument and returns number value
// function numberIdentity(item: number): number {
// 	return item;
// }

// // takes boolean argument and returns boolean value
// function booleanIdentity(item: boolean): boolean {
// 	return item;
// }

// to reduce duplication and a generic function

// takes type argument and returns that type
// function identity<T>(item: T): T {
// 	return item;
// }

// const stringIdentity = identity<string>('some string');
// const numberIdentity = identity<number>(7);
// const booleanIdentity = identity<boolean>(true);

function getRandomElement<T>(list: T[]): T {
	const randIndex = Math.floor(Math.random() * list.length);
	return list[randIndex];
}

console.log(getRandomElement<number>([1, 2, 3, 4]));
console.log(getRandomElement<boolean>([true, false]));
console.log(getRandomElement<number[]>([[1], [2]]));
console.log(getRandomElement<string>(['de', 'desa', 'des', 'desa']));

// function merge<T, U>(obj1: T, obj2: U): T & U {
// 	return {
// 		...obj1,
// 		...obj2,
// 	};
// }

// function merge<T, U>(obj1: T, obj2: U) {
// 	return {
// 		...obj1,
// 		...obj2,
// 	};
// }

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
	return {
		...obj1,
		...obj2,
	};
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

// const comboObj2 = merge(data1, 4);

console.log(comboObj);

// defualt generic types
function makeEmptyArr<T = string | number>(): T[] {
	return [];
}

const strings = makeEmptyArr();
strings.push('Hello');

const nums = makeEmptyArr();
nums.push(1);

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

interface Song {
	title: string;
	artist: string;
}

class Playlist<T> {
	public queue: T[] = [];
	public add(el: T) {
		this.queue.push(el);
	}
	public remove() {
		this.queue.pop();
	}
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

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

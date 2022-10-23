let age: number | string = 21;
age = 23;
age = '24';

type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	lon: number;
};

const coordinates: Point | Loc = {
	x: 7,
	y: 14,
};

const arr: (number | string)[] = [1, 2, 3];

// exercises: unions and literals
let hightScore: number | boolean;
let stuff: number[] | string[];
type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
type SkiSchoolStudent = {
	name: string;
	age: number;
	sport: 'ski' | 'snowboard';
	level: SkillLevel;
};
type RGB = {
	r: number;
	g: number;
	b: number;
};
type HSL = {
	h: number;
	s: number;
	l: number;
};

const colors: (RGB | HSL)[] = [
	{
		r: 255,
		g: 255,
		b: 255,
	},
	{
		h: 255,
		s: 255,
		l: 255,
	},
];

function greet(person: string | string[]): void {
	if (typeof person === 'string') {
		console.log(`Hello, ${person}`);
	} else {
		for (let p of person) {
			console.log(`Hello, ${p}`);
		}
	}
}

const people = ['Amka', 'Limbu'];

greet('Amka');
greet(people);

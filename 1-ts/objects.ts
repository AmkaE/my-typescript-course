// type Cat = {
// 	name: string;
// 	breed: string;
// 	age: number;
// };

// const cat = {
// 	name: 'Yarna',
// 	breed: 'Shiko',
// 	age: 7,
// };

function printName(person: { first: string; last: string }): void {
	console.log(`${person.first}: ${person.last}`);
}

type Point = { x: number; y: number };

let coordinate: Point = {
	x: 7,
	y: 14,
};

function randomCordinates(): Point {
	return { x: Math.random(), y: Math.random() };
}

function doubePoint(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}

// neted type alias
type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: {
		producer: string;
		writer: string;
	};
};

function calculatePayout(song: Song): number {
	return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
	console.log(`${song.title} - ${song.artist}`);
}

const mySong = {
	title: 'unchained Melony',
	artist: 'Righteous Brothers',
	numStreams: 23213212,
	credits: {
		producer: 'Phil Spector',
		writer: 'Alex North',
	},
};

calculatePayout(mySong);
printSong(mySong);

// intersections
type Circle = {
	radius: number;
};

type ColorFul = {
	color: string;
};

type ColorFulCircle = Circle & ColorFul;

const happyFace: ColorFulCircle = {
	radius: 4,
	color: 'yellow',
};

type Cat = {
	numLives: number;
};

type Dog = {
	breed: string;
};

type CatDog = Cat &
	Dog & {
		age: number;
	};

const christy: CatDog = {
	numLives: 7,
	breed: 'Husky',
	age: 9,
};

// exercise
type Movie = {
	readonly title: string;
	originalTitle?: string;
	director: string;
	releaseYear: number;
	boxOffice: {
		budget: number;
		grossUs: number;
		grossWorldWide: number;
	};
};

const dune: Movie = {
	title: 'Dune',
	originalTitle: 'Dune Part One',
	director: 'Denis Villeneuve',
	releaseYear: 2021,
	boxOffice: {
		budget: 165000000,
		grossUs: 108327830,
		grossWorldWide: 400671789,
	},
};
const cat: Movie = {
	title: 'Cats',
	director: 'Tom Hooper',
	releaseYear: 2019,
	boxOffice: {
		budget: 95000000,
		grossUs: 27166770,
		grossWorldWide: 73833348,
	},
};

function getProfit(movie: Movie): number {
	return movie.boxOffice.grossWorldWide - movie.boxOffice.budget;
}

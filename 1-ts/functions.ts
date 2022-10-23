// function sqaure(num) {
// 	return num * num;
// }

function sqaure(num: number): number {
	return num * num;
}

function makeObj(name: string, age: number) {
	return { name, age };
}

function makeArr(name: string, age: number): (string | number)[] {
	return [name, age];
}
// makeObj('Amka', 22);

// exercises
function twoFer(name: string = 'you'): string {
	return `One for $${name}, one for me`;
}

twoFer();
twoFer('Amka');

// function isLeapyear(year: number): boolean {
// 	if (year % 4 === 0 && year % 100 === 0) {
// 		return true;
// 	} else if (year % 400 === 0) {
// 		return true;
// 	}
// 	return false;
// }

function isLeapyear(year: number): boolean {
	return (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;
}

isLeapyear(2012);

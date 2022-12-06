// type narrowing with equality
function f1(x: string | number) {
	if (x === 0) {
		x; //  is number
	} else if (x === 'Hello') {
		x; // string
	} else {
		x; // string | number
	}
}

//  using typeof operator with equality
function f2(x: string | number) {
	if (typeof x === 'number') {
		x = 0; // number
	} else if (typeof x === 'string') {
		x = 'Hello'; // string
	} else {
		x; // string | number
	}
}

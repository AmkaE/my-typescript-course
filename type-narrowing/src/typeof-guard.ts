// use type typeofto check the type of a variable
function input(input: string | number) {
	if (typeof input === 'string') {
		return input.toUpperCase();
	}
	// when typescript gets here, it knows the type of input is number
	// so it can call the toFixed method
	return input.toFixed();
}

// typeof guard is good for primitive types

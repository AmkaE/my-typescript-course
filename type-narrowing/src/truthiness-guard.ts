// truthiness guard checks if a value is truthy or falsy
// falsy values are false, 0, -0, 0n, '', "", ``, null, undefined, NaN

function printLetters(word: string | null) {
	if (!word) {
		return 'no word was provided.';
	}
	return word.split('').join(' ');
}

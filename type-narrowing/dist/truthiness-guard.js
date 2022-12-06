"use strict";
function printLetters(word) {
    if (!word) {
        return 'no word was provided.';
    }
    return word.split('').join(' ');
}

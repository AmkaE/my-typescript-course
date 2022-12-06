"use strict";
function f1(x) {
    if (x === 0) {
        x;
    }
    else if (x === 'Hello') {
        x;
    }
    else {
        x;
    }
}
function f2(x) {
    if (typeof x === 'number') {
        x = 0;
    }
    else if (typeof x === 'string') {
        x = 'Hello';
    }
    else {
        x;
    }
}

"use strict";
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    get area() {
        return this.side * this.side;
    }
}

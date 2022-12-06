"use strict";
function area(shape) {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'rectangle':
            return shape.height * shape.width;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}

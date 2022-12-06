// descriminated unions
interface Square {
	kind: 'square';
	size: number;
}

interface Rectangle {
	kind: 'rectangle';
	width: number;
	height: number;
}

interface Circle {
	kind: 'circle';
	radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape) {
	switch (shape.kind) {
		// if shape.kind is 'square', then shape is a Square
		case 'square':
			return shape.size * shape.size;
		// if shape.kind is 'rectangle', then shape is a Rectangle
		case 'rectangle':
			return shape.height * shape.width;
		// if shape.kind is 'circle', then shape is a Circle
		case 'circle':
			return Math.PI * shape.radius ** 2;
		default:
			// if all cases are covered, then we should never get here
			// const shouldNeverHere: never = shape;
			// return shouldNeverHere;
			const _exhaustiveCheck: never = shape;
			return _exhaustiveCheck;
	}
}

import type { User } from './types.js';
import type { X, Y } from './types.js';

export function add(x: X, y: Y): number {
	return x + y;
}

export function randomEl<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function printUser(user: User) {
	console.log(user.name, user.age);
}

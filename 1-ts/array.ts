// const activeUsers: string[] = [];
// activeUsers.push('Amka');

// const agesList: number[] = [22, 24, 26, 28, 30];

// const names: string[] = [];
// const names: Array<string> = [];

// const board: string[][] = [
// 	['x', 'o', 'x'],
// 	['o', 'o', 'o'],
// 	['o', 'x', 'x'],
// ];

const ages: number[] = [];
const gameBoard: string[][] = [];

type Product = {
	name: string;
	price: number;
};

const products: Product[] = [
	{
		name: 'item one',
		price: 9.99,
	},
	{
		name: 'item two',
		price: 8.55,
	},
	{
		name: 'item three',
		price: 8.99,
	},
];

function getTotal(productsArr: Product[]) {
	let sum = 0;

	for (let product of productsArr) {
		sum += product.price;
	}

	return sum;
}

const totalPrice = getTotal(products);

console.log(totalPrice);

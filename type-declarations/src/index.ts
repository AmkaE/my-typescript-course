import axios from 'axios';
import _ from 'lodash';

console.log(_.replace('Hello World', 'World', 'TypeScript'));

const url = 'https://jsonplaceholder.typicode.com/users/1';

interface User {
	id: number;
	name: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

axios
	.get<User>(url)
	.then(res => {
		const { data } = res;
		printUser(data);
	})
	.catch(err => console.log(err.message));

function printUser(user: User): void {
	console.log({
		id: user.id,
		name: user.name,
		email: user.email,
	});
}

// Non-Null assertion
// const btn = document.getElementById('btn')!;

// let mystery: unknown = 'Hello';

// 'mystery' is of type 'unknown'
// const numChars = mystery.length;

// type assertions
// const numChars = (mystery as string).length;

const todoInput = document.getElementById('todo-input')! as HTMLInputElement;
const btn = document.getElementById('btn')! as HTMLButtonElement;
// const todoForm = document.querySelector('#todoform')! as HTMLFormElement;
const todoForm = document.querySelector('form')!;
const todoList = document.querySelector('#todolist')!;

// todoForm.addEventListener('submit', e => {
// 	e.preventDefault();
// 	console.log(todoInput.value);

// 	todoInput.value = '';
// });

// function handleSubmit(e: Event) {}

interface Todo {
	text: string;
	isCompleted: boolean;
}

function getTodos(): Todo[] {
	const todosJSON = localStorage.getItem('todos');

	if (todosJSON === null) return [];
	return JSON.parse(todosJSON);
}

function saveTodos() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

let todos: Todo[] = getTodos();

todos.forEach(createTodo);

function handleSubmit(e: SubmitEvent) {
	e.preventDefault();

	const todoText = todoInput.value;

	const todo: Todo = {
		text: todoText,
		isCompleted: false,
	};

	createTodo(todo);
	todos.push(todo);

	saveToLocalStorage(todos);

	saveTodos();
	todoInput.value = '';
}

function createTodo(todo: Todo) {
	const todoEl = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = todo.isCompleted;

	checkbox.addEventListener('change', () => {
		todo.isCompleted = checkbox.checked;
		saveTodos();
	});

	todoEl.innerText = todo.text;
	todoEl.append(checkbox);

	todoList.appendChild(todoEl);
}

function saveToLocalStorage(todos: Todo[]): void {
	localStorage.setItem('todos', JSON.stringify(todos));
}

todoForm.addEventListener('submit', handleSubmit);

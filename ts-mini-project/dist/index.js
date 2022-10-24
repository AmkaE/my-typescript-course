"use strict";
// Non-Null assertion
// const btn = document.getElementById('btn')!;
// let mystery: unknown = 'Hello';
// 'mystery' is of type 'unknown'
// const numChars = mystery.length;
// type assertions
// const numChars = (mystery as string).length;
const todoInput = document.getElementById('todo-input');
const btn = document.getElementById('btn');
// const todoForm = document.querySelector('#todoform')! as HTMLFormElement;
const todoForm = document.querySelector('form');
const todoList = document.querySelector('#todolist');
function getTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
let todos = getTodos();
todos.forEach(createTodo);
function handleSubmit(e) {
    e.preventDefault();
    const todoText = todoInput.value;
    const todo = {
        text: todoText,
        isCompleted: false,
    };
    createTodo(todo);
    todos.push(todo);
    saveToLocalStorage(todos);
    saveTodos();
    todoInput.value = '';
}
function createTodo(todo) {
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
function saveToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}
todoForm.addEventListener('submit', handleSubmit);

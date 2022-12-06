"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.replace('Hello World', 'World', 'TypeScript'));
const url = 'https://jsonplaceholder.typicode.com/users/1';
axios_1.default
    .get(url)
    .then(res => {
    const { data } = res;
    printUser(data);
})
    .catch(err => console.log(err.message));
function printUser(user) {
    console.log({
        id: user.id,
        name: user.name,
        email: user.email,
    });
}

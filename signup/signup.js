import { getUser, setUser, loginUser, getCurrentUser, createUser } from '../local-storage.js';

// createUser('chen', '123', 'Chen');
// createUser('jacky', '345', 'Jack');

const usernameInput = document.querySelector('#user-name');
const pwInput = document.querySelector('#pw');
const nameInput = document.querySelector('#name');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    createUser(usernameInput.value, nameInput.value, pwInput.value);
console.log('success');


})
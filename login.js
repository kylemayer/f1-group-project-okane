import { loginUser } from './local-storage.js';

// createUser('chen', '123', 'Chen');
// createUser('jacky', '345', 'Jack');

const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');


    loginUser(username, password);



});
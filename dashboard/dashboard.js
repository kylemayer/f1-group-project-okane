import { logout } from '../local-storage.js'
const logoutButton = document.querySelector('#logout'); 





logoutButton.addEventListener('click', () => {
    logout(); 
}); 
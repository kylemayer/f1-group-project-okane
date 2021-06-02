import { logout, getCurrentUser } from '../local-storage.js';
import { getTotalMoney, getTotalExpenses } from '../budget.js';
const logoutButton = document.querySelector('#logout'); 

const user = getCurrentUser();
const currentMonth = user.month;
const totalMoney = getTotalMoney();
const totalExpenses = getTotalExpenses();


logoutButton.addEventListener('click', () => {
    logout(); 
}); 
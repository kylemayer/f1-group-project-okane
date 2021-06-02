import { logout, getCurrentUser } from '../local-storage.js';
import { getTotalMoney, getTotalExpenses } from '../budget.js';
import { user1 } from '../assets/demo-data.js';

const logoutButton = document.querySelector('#logout');
const rootDiv = document.querySelector('#root');

const user = getCurrentUser();
const currentMonth = user.month;
const totalMoney = getTotalMoney();
const totalExpenses = getTotalExpenses();

logoutButton.addEventListener('click', () => {
    logout();
});

function renderUserData(user1) {
    const tr = document.createElement('tr');

    const companyName = document.createElement('td');
    const categoryName = document.createElement('td');
    const cashValue = document.createElement('td');
    const description = document.createElement('td');
    const subscription = document.createElement('td');
}

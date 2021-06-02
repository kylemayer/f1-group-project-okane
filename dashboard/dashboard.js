import { logout, getCurrentUser, findById } from '../local-storage.js';
import { getTotalMoney, getTotalExpenses } from '../budget.js';
import { user1 } from '../assets/demo-data.js'; // used to test data


const logoutButton = document.querySelector('#logout');


// const user = getCurrentUser();
// const currentMonth = user.month;
// const totalMoney = getTotalMoney();
// const totalExpenses = getTotalExpenses();



logoutButton.addEventListener('click', () => {
    logout();
});


function renderUserData(user1) {
    
    const bodyTag = document.querySelector('tbody');
    const month = user1[5]; 
    const outterTR = document.createElement('tr');
    for (let finance in month) {
        const monthlyFinance = month[finance]; 
        for (let obj of monthlyFinance) {
            const tr = document.createElement('tr');
            const companyName = document.createElement('td');
            const categoryName = document.createElement('td');
            const cashValue = document.createElement('td');
            const description = document.createElement('td');
            const subscription = document.createElement('td');
            categoryName.textContent = obj.category; 
            companyName.textContent = obj.name;
            description.textContent = obj.description;    
            cashValue.textContent = obj.value; 
            subscription.textContent = obj.static; 
            tr.append(companyName, categoryName, cashValue, description, subscription);    
            outterTR.append(tr);
        }
    }
    bodyTag.append(outterTR); 
}

renderUserData(user1);

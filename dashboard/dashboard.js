import { logout, getCurrentUser, findById } from '../local-storage.js';
import { getTotalMoney, getTotalExpenses } from '../budget.js';
import { user1 } from '../assets/demo-data.js'; // used to test data


const logoutButton = document.querySelector('#logout');
const user = getCurrentUser(); // user localStorage
renderUserData(user);

const enterButton = document.querySelector('#enterBtn'); 

function renderUserData(user) {
    const bodyTag = document.querySelector('tbody');
    const currentMonth = new Date().getMonth() + 1; 
    const month = user[currentMonth]; 
    bodyTag.innerHTML = ''; 
    for (let finance in month) {  // length 3
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
            bodyTag.append(tr); 
        }
    }
}


enterButton.addEventListener('click', () => {
    const user = getCurrentUser(); // user localStorage
    renderUserData(user); 
    window.location.href = './index.html'; 
}); 

// renderUserData(user); 


logoutButton.addEventListener('click', () => {
    logout();
});
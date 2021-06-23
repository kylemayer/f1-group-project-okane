import { getCurrentUser } from '../local-storage.js'; 

const topTotal = document.querySelector('#displayTotal'); 
const topExpense = document.querySelector('#displayExpense'); 
const topIncome = document.querySelector('#displayIncome'); 
const topSaving = document.querySelector('#displaySaving'); 

const user = getCurrentUser(); 

function getMonthlyFinanceDate(user) {
    const allMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const allMonthsData = []; 
    for (let key in user) {
        if (allMonths.includes(key)) {
            allMonthsData.push(user[key]); 
        }
    }
    return allMonthsData; 
} 

getMonthlyFinanceDate(user); 

const allMonthData = getMonthlyFinanceDate(user);

function displayTopData(monthsData) { 
    let savings = 0; 
    let expenses = 0; 
    let income = 0; 
    let total = 0; 

    const totalP = document.createElement('p');
    const expensesP = document.createElement('p'); 
    const incomeP = document.createElement('p'); 
    const savingsP = document.createElement('p'); 

    // very slick work here! loops inside of loops are usually a bad idea (the only performance hit that most devs really need to think about), but this is pretty readable
    for (let dataObj of monthsData) {
        const keys = Object.keys(dataObj); 
        for (let key of keys) {
            if (key === 'income') {
                for (let cash of dataObj[key]) {
                    income += Number(cash.value); 
                }
            } else if (key === 'expenses') {
                for (let exp of dataObj[key]) {
                    expenses -= Number(exp.value);  
                } 
            } else if (key === 'savings') {
                for (let save of dataObj[key]) {
                    savings += Number(save.value); 
                }
            }
        }
    }
    total += income + expenses + savings;  
    totalP.textContent = makeMoneyString('Total', total);
    expensesP.textContent = makeMoneyString('Expenses', expenses);
    incomeP.textContent = makeMoneyString('Income', income);
    savingsP.textContent = makeMoneyString('Savings', savings);
    
    topTotal.append(totalP);
    topExpense.append(expensesP); 
    topIncome.append(incomeP); 
    topSaving.append(savingsP); 
    
}

displayTopData(allMonthData); 


function makeMoneyString(word, money) {
    `${word}: ${money.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })}`; 
}
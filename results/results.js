import { getCurrentUser } from '../local-storage.js';

const chart = document.querySelector('canvas');

chart.style.maxHeight = '500px';
chart.style.maxWidth = '300px';

const month = new Date().getMonth() + 1;
const user = getCurrentUser();
// const incomeCatArray = [];
// const incomeValArray = [];
// const expensesCatArray = [];
// const expensesValArray = [];

// // for (let obj of user[month].expenses) {
// //     for (let cat of expensesCatArray) {
// //         if (obj.category === cat) {

// //         }
// //     }
// // }

//create array of all the categories, using a loop
//loop through that array, if the category mataches, accumulate into a new accumulator if it doesn't exist, and if it does, accumulate onto the existing one

const foodValue = getTotal('food', 'expenses');
const billsValue = getTotal('bills', 'expenses');
const transportValue = getTotal('transport', 'expenses');
const insuranceValue = getTotal('insurance', 'expenses');
const healthValue = getTotal('health', 'expenses');
const entValue = getTotal('entertainment', 'expenses');

function getTotal(category, type) {
    let accumulator = 0;
    for (let item of user[month][type]) {
        if (category === item.category)
            accumulator = accumulator + item.value;
    }
    return accumulator;
}

//find a way to remove label if there's no data for it
console.log(foodValue);
const expenses = {
    labels: [
        'Food',
        'Home Bills',
        'Transport',
        'Insurance',
        'Health',
        'Entertainment'
    ],
    datasets: [{
        label: 'Expenses',
        data: [foodValue, billsValue, transportValue, insuranceValue, healthValue, entValue],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 86)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 20
    }]
};


const config = {
    type: 'pie',
    data: expenses,
};

new Chart(
    chart,
    config
);
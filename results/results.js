import { getCurrentUser } from '../local-storage.js';

const expensesChart = document.querySelector('#expenses-chart').getContext('2d');
expensesChart.canvas.width = '300px';
expensesChart.canvas.height = '300px';
const incomeChart = document.querySelector('#income-chart');
const subsChart = document.querySelector('#subs-chart');

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
const healthValue = getTotal('medical', 'expenses');
const entValue = getTotal('entertainment', 'expenses');

function getTotal(category, type) {
    let accumulator = 0;
    for (let item of user[month][type]) {
        if (category === item.category)
            accumulator = accumulator + Number(item.value);
    }
    return accumulator;
}

const expenses = {
    labels: [],
    datasets: [{
        label: 'Expenses',
        data: [],
        backgroundColor: [],
        hoverOffset: 1
    }]
};

if (foodValue) {
    expenses.labels.push('Food');
    expenses.datasets[0].data.push(foodValue);
    expenses.datasets[0].backgroundColor.push('#0081A7');
}
if (billsValue) {
    expenses.labels.push('Home Bills');
    expenses.datasets[0].data.push(billsValue);
    expenses.datasets[0].backgroundColor.push('#00AFB9');
}
if (transportValue) {
    expenses.labels.push('Transport');
    expenses.datasets[0].data.push(transportValue);
    expenses.datasets[0].backgroundColor.push('#FDFCDC');
}
if (insuranceValue) {
    expenses.labels.push('Insurance');
    expenses.datasets[0].data.push(insuranceValue);
    expenses.datasets[0].backgroundColor.push('#FED9B7');
}
if (healthValue) {
    expenses.labels.push('Health');
    expenses.datasets[0].data.push(healthValue);
    expenses.datasets[0].backgroundColor.push('#F07167');
}
if (entValue) {
    expenses.labels.push('Entertainment');
    expenses.datasets[0].data.push(entValue);
    expenses.datasets[0].backgroundColor.push('#FBDCDA');
}

const config = {
    type: 'pie',
    data: expenses,
};

new Chart(
    expensesChart,
    config
);

const bankTotal = getTotal('bank', 'income');
const salaryTotal = getTotal('salary', 'income');
const otherTotal = getTotal('others', 'income');

const income = {
    labels: [],
    datasets: [{
        label: 'Income',
        data: [],
        backgroundColor: [],
        hoverOffset: 1
    }]
};

if (bankTotal) {
    income.labels.push('Bank');
    income.datasets[0].data.push(bankTotal);
    income.datasets[0].backgroundColor.push('#0081A7');
}
if (salaryTotal) {
    income.labels.push('Salary');
    income.datasets[0].data.push(salaryTotal);
    income.datasets[0].backgroundColor.push('#00AFB9');
}
if (otherTotal) {
    income.labels.push('Other');
    income.datasets[0].data.push(otherTotal);
    income.datasets[0].backgroundColor.push('#FDFCDC');
}

const config2 = {
    type: 'pie',
    data: income,
};

new Chart(
    incomeChart,
    config2
);

const holidayTotal = getTotal('holiday', 'savings');
const rainyTotal = getTotal('rainy-day', 'savings');
const eduTotal = getTotal('education', 'savings');
const retTotal = getTotal('retirement', 'savings');
const otherTotalSav = getTotal('other', 'savings');

const savings = {
    labels: [],
    datasets: [{
        label: 'Savings',
        data: [],
        backgroundColor: [],
        hoverOffset: 1
    }]
};

if (holidayTotal) {
    savings.labels.push('Holiday');
    savings.datasets[0].data.push(holidayTotal);
    savings.datasets[0].backgroundColor.push('#0081A7');
}
if (rainyTotal) {
    savings.labels.push('Rainy Day');
    savings.datasets[0].data.push(rainyTotal);
    savings.datasets[0].backgroundColor.push('#00AFB9');
}
if (eduTotal) {
    savings.labels.push('Education');
    savings.datasets[0].data.push(eduTotal);
    savings.datasets[0].backgroundColor.push('#FDFCDC');
}
if (retTotal) {
    savings.labels.push('Retirement');
    savings.datasets[0].data.push(retTotal);
    savings.datasets[0].backgroundColor.push('#FED9B7');
}
if (otherTotalSav) {
    savings.labels.push('Other');
    savings.datasets[0].data.push(otherTotalSav);
    savings.datasets[0].backgroundColor.push('#FBDCDA');
}

const config3 = {
    type: 'pie',
    data: savings,
};

new Chart(
    subsChart,
    config3
);

// const subscriptions = {
//     labels: getEntTotal()[0],
//     datasets: [{
//         label: 'Entertainment',
//         data: getEntTotal()[1],
//         backgroundColor: ['#0081A7', '#00AFB9', '#FDFCDC', '#FED9B7', '#F07167', '#FBDCDA'],
//         hoverOffset: 1
//     }]
// };

// function getEntTotal() {
//     const nameArray = [];
//     const valueArray = [];
//     for (let item of user[month].expenses) {
//         if (item.category === 'entertainment') {
//             nameArray.push(item.name);
//             valueArray.push(item.value);
//         }
//     }
//     return [nameArray, valueArray];
// }

// const config3 = {
//     type: 'pie',
//     data: subscriptions,
// };

// new Chart(
//     subsChart,
//     config3
// );
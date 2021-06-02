import { getCurrentUser, setUser, findById} from './local-storage.js'; 

// updated month
// get user()
// 

const randomNumber = () => {
    return Math.floor(Math.random() * 99999); 
}; 

const form = document.querySelector('form');
const currentMonth = new Date().getMonth() + 1;
const currentUser = getCurrentUser();
if (currentUser.month !== (new Date().getMonth() + 1)) {
    currentUser.month = new Date().getMonth() + 1;
    currentUser[currentMonth] = { income: [], expenses: [], savings: [] };
    setUser(currentUser);
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const formData = new FormData(form); 
    const name = formData.get('name');
    const description = formData.get('description');
    const amount = formData.get('amount'); 
    const staticBox = formData.get('staticBox'); 
    const deficit = formData.get('deficit'); 
    const surplus = formData.get('surplus');    

    console.log(name, description, amount, staticBox, deficit, surplus); 


    if (deficit === 'select') {
        const userData = {
            id: randomNumber(), 
            name: name, 
            category: surplus, 
            value: amount, 
            description: description
        };
    }     
}); 

export function getTotalMoney() {
    const user = getCurrentUser();
    const currentMonth = user.month;
    let total = 0;
    for (let item of user.income) {
        total = total + item.value;
    }
    return (total);
}

export function getTotalExpenses() {
    const user = getCurrentUser();
    const currentMonth = user.month;
    let total = 0;
    for (let item of user.expenses) {
        total = total + item.value;
    }
    return (total);
}




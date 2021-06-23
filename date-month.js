import { getCurrentUser } from ' ./localStorage.js'; 


export function checkMonth() {

    const currentMonth = new Date().getMonth(); 
    const user = getCurrentUser(); 

    return user.month === currentMonth;
}

// nice use of sub-functions here!
export function updateMonth() {
    const currentUser = getCurrentUser(); 
    if (!checkMonth()) {
        currentUser.month = new Date().getMonth(); 
    }
}

import { getCurrentUser, setUser, findById} from './local-storage.js'; 

// updated month
// get user()
// 

const randomNumber = () => {
    return Math.floor(Math.random() * 99999); 
}; 

const form = document.querySelector('form'); 

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
            description: description, 
            staticBox:  
        }; 
            
    }


}); 




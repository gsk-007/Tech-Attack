const btn = document.getElementById('edit-info-btn')
const btn2 = document.getElementById('show-details')
const first = document.querySelector(".first-display")
const second = document.querySelector(".second-display")

btn.addEventListener('click',()=>{
    if(btn.innerHTML == 'Edit Info'){
        first.classList.add('hidden');  
        second.classList.remove('hidden') 
    }
})
btn2.addEventListener('click',()=>{
    if(btn.innerHTML == 'Edit Info'){
        second.classList.add('hidden');   
        first.classList.remove('hidden');   
    }
})
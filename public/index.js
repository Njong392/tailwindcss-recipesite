const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){ //if the menu is hidden
        menu.classList.remove('hidden'); //remove hidden class and show menu
    }else{
        menu.classList.add('hidden'); //else add hidden class and remove menu if menu is nit hidden
    }
})

const nav= document.querySelector('#nav-item');

nav.addEventListener('click', ()=>{

    
})

const nav2= document.querySelector('#nav-item2');

nav2.addEventListener('click', ()=>{
    nav2.setAttribute('style', 'border-right: 4px solid #FF6363');
})

const nav3= document.querySelector('#nav-item3');

nav3.addEventListener('click', ()=>{
    nav3.setAttribute('style', 'border-right: 4px solid #FF6363');
})
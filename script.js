const burger = document.querySelector('.burger');
const burger_icon = document.querySelector('.burger i');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', ()=>{
    burger_icon.classList.toggle('bx-menu');
    burger_icon.classList.toggle('bx-x');
    nav.classList.toggle('active');
    document.body.classList.toggle('active');
})
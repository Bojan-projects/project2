const navbar = document.querySelector('.navbar');
const menuBtn = document.getElementById('menu-btn');
const searchForm = document.querySelector('#search-btn');
const searchBox = document.querySelector('.search-form')
const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form');
const contactForm = document.querySelector('.contact-info');
const infoBtn = document.getElementById('info-btn');


menuBtn.addEventListener('click', ()=>{
 navbar.classList.toggle('active');
 searchBox.classList.remove('active');
 contactForm.classList.remove('active');
 loginForm.classList.remove('active');
})

searchForm.addEventListener('click', ()=>{
 searchBox.classList.toggle('active');
 contactForm.classList.remove('active');
 loginForm.classList.remove('active');
 navbar.classList.remove('active');
})
loginBtn.addEventListener('click', ()=>{
 loginForm.classList.toggle('active');
 navbar.classList.remove('active');
 searchBox.classList.remove('active');
 contactForm.classList.remove('active');

})
infoBtn.addEventListener('click', ()=>{
 contactForm.classList.toggle('active');
 loginForm.classList.remove('active');
 navbar.classList.remove('active');
 searchBox.classList.remove('active');
})

window.onscroll = () =>{
 navbar.classList.remove('active');
 searchBox.classList.remove('active');
 loginForm.classList.remove('active');
 contactForm.classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
 loop: true,
 grabCursor: true,
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
});
var swiper = new Swiper(".reviews-slider", {
 loop: true,
 grabCursor: true,
 spaceBetween: 20,
breakpoints:{
 640:{
  slidesPerView:1,
  
 },
 
 768:{
  slidesPerView:2,
  
 },
 
 991:{
  slidesPerView:3,
 },
 
},
});
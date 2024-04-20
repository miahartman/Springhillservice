let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}
const carouselImages = document.querySelector('.carousel-images');
const thumbnails = document.querySelectorAll('.carousel-thumbnails img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const index = Array.from(thumbnails).indexOf(thumbnail);
        carouselImages.style.transform = `translateX(-${index * 33.33}%)`;
    });
});

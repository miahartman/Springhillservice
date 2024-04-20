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
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const thumbnails = document.querySelectorAll('.carousel-thumbnails img');
let currentIndex = 0;

// Function to update carousel display based on currentIndex
function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

// Add click event listeners to prev and next buttons
prevButton.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : thumbnails.length - 3;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = currentIndex < thumbnails.length - 3 ? currentIndex + 1 : 0;
    updateCarousel();
});

// Add click event listeners to thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const imageSrc = document.querySelectorAll('.carousel-images img')[index].src;

    lightboxImage.src = imageSrc;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Disable scrolling when lightbox is open
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    document.body.style.overflow = ''; // Enable scrolling when lightbox is closed
}

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
const galleryItems = document.querySelectorAll('.gallery-item');
const featuredItem = document.querySelector('.featured-item');
const leftBtn = document.querySelector('.move-btn.left');
const rightBtn = document.querySelector('.move-btn.right');

let currentIndex = 0;

leftBtn.addEventListener('click', () => {
   if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
   }
});

rightBtn.addEventListener('click', () => {
   if (currentIndex < galleryItems.length - 1) {
      currentIndex++;
      updateGallery();
   }
});

function updateGallery() {
   const selectedItem = galleryItems[currentIndex];
   const imgSrc = selectedItem.querySelector('img').src;
   featuredItem.innerHTML = `<img src="${imgSrc}" alt="Featured Image">`;
}
            // Add more cases for additional images
            default: return "url('default.jpg')"; // Default image or handle other cases
        }
    }
});

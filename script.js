let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const numOfItems = galleryItems.length;
    const itemWidth = 100 / numOfItems; // Calculate item width dynamically
    let currentIndex = 0;

    const leftBtn = document.querySelector('.move-btn.left');
    const rightBtn = document.querySelector('.move-btn.right');

    leftBtn.addEventListener('click', movePrev);
    rightBtn.addEventListener('click', moveNext);

    function moveNext() {
        currentIndex = (currentIndex + 1) % numOfItems;
        updateGallery();
    }

    function movePrev() {
        currentIndex = (currentIndex - 1 + numOfItems) % numOfItems;
        updateGallery();
    }

    function updateGallery() {
        const newPosition = -currentIndex * itemWidth;
        gallery.style.transform = `translateX(${newPosition}%)`;

        // Update featured item
        const featuredItem = document.querySelector('.featured-item');
        featuredItem.style.backgroundImage = getBackgroundImage(currentIndex);

        // Update active class
        galleryItems.forEach(item => item.classList.remove('active'));
        galleryItems[currentIndex].classList.add('active');
    }

    function getBackgroundImage(index) {
        switch (index) {
            case 0: return "url('garage1.JPG')";
            case 1: return "url('garage2.JPG')";
            case 2: return "url('inspection.JPG')";
            case 3: return "url('truck.jpg')";
            case 4: return "url('boat.jpg')";
            // Add more cases for additional images
            default: return "url('default.jpg')"; // Default image or handle other cases
        }
    }
});

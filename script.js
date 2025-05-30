let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let bar = document.querySelector(".bar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    bar.classList.toggle("active");
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    bar.classList.remove("active");
}

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

//swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    pagination: {
      el: ".coming-pagination",
      type: "progressbar",
    },
    breakpoints: {
        0:{
            slidesPerView: 2,
        },
        568:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 4,
        },
        968:{
            slidesPerView: 5,   
        },
    },
  });
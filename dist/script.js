// Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNavbar = header.offsetTop;
  const logoLight = document.getElementById("logo-light");
  const logoDark = document.getElementById("logo-dark");

  if (window.pageYOffset > fixedNavbar) {
    header.classList.add("navbar-fixed");
    logoLight.classList.add("hidden");
    logoDark.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    logoLight.classList.remove("hidden");
    logoDark.classList.add("hidden");
  }
};

// Burgerkill Toggle
const burgerkill = document.querySelector("#burgerkill");
const navbarMenu = document.querySelector("#navbar-menu");

burgerkill.addEventListener("click", function () {
  burgerkill.classList.toggle("burgerkill-active");
  navbarMenu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullet: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      120: {
        slidesPerView: 1,
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});

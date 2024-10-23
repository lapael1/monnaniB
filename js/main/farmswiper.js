// js
window.addEventListener("load", function () {
  //  farmswiper 스와이퍼 기능
  const swFarmswiper = new Swiper(".sw-farmswiper", {
    speed: 3000,
    centeredSlides: true,
    slidesPerView: 4.2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.5, // 1280px 이상일 때 한 번에 3개의 슬라이드 표시
        spaceBetween: 20, // 슬라이드 간격 100px
      },
      768: {
        slidesPerView: 2.5, // 1280px 이상일 때 한 번에 3개의 슬라이드 표시
        spaceBetween: 20, // 슬라이드 간격 100px
      },
      480: {
        slidesPerView: 2.2, // 1280px 이상일 때 한 번에 3개의 슬라이드 표시
        spaceBetween: 20, // 슬라이드 간격 100px
      },
      320: {
        slidesPerView: 2.0, // 1280px 이상일 때 한 번에 3개의 슬라이드 표시
        spaceBetween: 20, // 슬라이드 간격 100px
      },
    },
  });
});

// jquery
// $(document).ready(function () {

// })

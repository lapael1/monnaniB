// js
window.addEventListener("load", function () {
  //  배너 스와이퍼 기능
  const swBanner = new Swiper(".sw-banner", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      760: {
        slidesPerView: 1,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner-pg",
      clickable: true,

      type: "fraction",
    },
  });
  // 배너 슬라이드 멈춤 기능
  const swBannerPlay = document.querySelector(".banner-play");
  swBannerPlay.addEventListener("click", function () {
    if (swBannerPlay.classList.contains("active")) {
      swBanner.autoplay.start();
      swBannerPlay.classList.remove("active");
    } else {
      swBanner.autoplay.stop();
      swBannerPlay.classList.add("active");
    }
  });
});
// jquery
$(document).ready(function () {});

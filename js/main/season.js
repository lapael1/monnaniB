window.addEventListener("load", function () {
  const swSeasonswiper = new Swiper(".swiper-season", {
    slidesPerView: 2, // 기본: 2개의 슬라이드 보이기
    slidesPerGroup: 2, // 기본: 2개의 슬라이드를 한 번에 넘기기
    spaceBetween: 0, // 슬라이드 간 간격 없음
    loop: true, // 슬라이드 반복
    breakpoints: {
      1024: {
        slidesPerView: 2, // 1024px 이하에서는 1개의 슬라이드만 보이기
        slidesPerGroup: 1, // 슬라이드를 한 번에 하나씩 넘기기
      },
      768: {
        slidesPerView: 1, // 1024px 이하에서는 1개의 슬라이드만 보이기
        slidesPerGroup: 1, // 슬라이드를 한 번에 하나씩 넘기기
      },
      320: {
        slidesPerView: 1, // 1024px 이하에서는 1개의 슬라이드만 보이기
        slidesPerGroup: 1, // 슬라이드를 한 번에 하나씩 넘기기
      },
    },
    pagination: {
      el: ".season .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".season .swiper-button-next",
      prevEl: ".season .swiper-button-prev",
    },
  });
});


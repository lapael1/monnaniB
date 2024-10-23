window.addEventListener("load", function () {
  // 스와이퍼 초기화
  const swModal = new Swiper(".sw-modal", {
    slidesPerView: 1, // 한 번에 하나의 슬라이드만 보여줌
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next", // 다음 슬라이드 버튼
      prevEl: ".swiper-button-prev", // 이전 슬라이드 버튼
    },
  });
});

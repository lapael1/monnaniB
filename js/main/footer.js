// js
window.addEventListener("load", function () {
  const swFarmswiperb = new Swiper(".sw-farmswiperb", {
    speed: 50000,  // 5초에 한 번씩 슬라이드 전환
    loop: true,   // 무한 반복을 위해 루프 활성화
    autoplay: {
      delay: 0,  // 지연 시간 없이 연속 스와이프
      disableOnInteraction: false,  // 사용자가 상호작용해도 autoplay가 유지됨
    },
    slidesPerView: 'auto',  // 이미지의 크기에 맞춰 한 번에 보여질 슬라이드를 자동으로 조정
    spaceBetween: 0,  // 슬라이드 간 간격 제거
    freeMode: true,  // 자유롭게 움직이도록 설정
  });
  const swFarmswiperc = new Swiper(".sw-farmswiperc", {
    speed: 50000,  // 5초에 한 번씩 슬라이드 전환
    loop: true,   // 무한 반복을 위해 루프 활성화
    autoplay: {
      delay: 0,  // 지연 시간 없이 연속 스와이프
      disableOnInteraction: false,  // 사용자가 상호작용해도 autoplay가 유지됨
      reverseDirection: true
    },
    slidesPerView: 'auto',  // 이미지의 크기에 맞춰 한 번에 보여질 슬라이드를 자동으로 조정
    spaceBetween: 0,  // 슬라이드 간 간격 제거
    freeMode: true,  // 자유롭게 움직이도록 설정
  });
});

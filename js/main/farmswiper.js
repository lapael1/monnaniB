window.addEventListener("load", function () {
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
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2.0,
        spaceBetween: 20,
      },
    },
    on: {
      transitionEnd: function () {
        // 모든 슬라이드의 기본 상태로 되돌림
        document.querySelectorAll(".sw-farmswiper .swiper-slide").forEach(function (slide) {
          const produceImg = slide.querySelector(".produce-img");
          const recipeOverlay = slide.querySelector(".recipe-overlay");

          // 기본 이미지로 되돌리기
          if (produceImg) {
            produceImg.style.opacity = "1"; // 기본 이미지 보이기
          }
          if (recipeOverlay) {
            recipeOverlay.style.opacity = "0"; // hover 이미지를 숨기기
          }
        });

        // 중앙 슬라이드에 자동 전환 효과 적용
        const activeSlide = document.querySelector(".sw-farmswiper .swiper-slide-active");

        if (activeSlide) {
          const produceImg = activeSlide.querySelector(".produce-img");
          const recipeOverlay = activeSlide.querySelector(".recipe-overlay");

          // 중앙 슬라이드에서는 기본 이미지를 숨기고 hover 이미지를 보이게 처리
          if (produceImg) {
            produceImg.style.opacity = "0"; // 기본 이미지 숨기기
          }
          if (recipeOverlay) {
            recipeOverlay.style.opacity = "1"; // hover 이미지 보이기
          }
        }
      },
    },
  });

  document.querySelectorAll(".sw-farmswiper .swiper-slide").forEach(function (slide) {
    slide.addEventListener("mouseover", function () {
      const produceImg = slide.querySelector(".produce-img");
      const recipeOverlay = slide.querySelector(".recipe-overlay");
  
      // 마우스 오버 시 기본 이미지 숨기고 hover 이미지 표시
      if (produceImg) {
        produceImg.style.opacity = "0"; // 기본 이미지 숨기기
      }
      if (recipeOverlay) {
        recipeOverlay.style.opacity = "1"; // hover 이미지 보이기
        recipeOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // hover 배경 어둡게
      }
    });
  
    slide.addEventListener("mouseout", function () {
      const produceImg = slide.querySelector(".produce-img");
      const recipeOverlay = slide.querySelector(".recipe-overlay");
  
      // 마우스가 떠났을 때 기본 이미지와 hover 이미지 초기 상태로 복귀
      if (produceImg) {
        produceImg.style.opacity = "1"; // 기본 이미지 다시 보이기
      }
      if (recipeOverlay) {
        recipeOverlay.style.opacity = "0"; // hover 이미지 숨기기
        recipeOverlay.style.backgroundColor = "transparent"; // 배경 투명으로 복귀
      }
    });
  });
  
});

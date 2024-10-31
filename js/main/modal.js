// Swiper 전역 변수 선언
let swModal;

// 쿠키 설정 함수
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// 쿠키 확인 함수
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  const cookieName = `${name}=`;
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(cookieName) === 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return '';
}

// 특정 슬라이드를 닫고 "오늘 하루 열지 않음" 쿠키 설정
function closeSlide(slideId, checkboxId) {
  const slide = document.getElementById(slideId);
  const notTodayCheckbox = document.getElementById(checkboxId);

  if (notTodayCheckbox && notTodayCheckbox.checked) {
    setCookie(slideId, 'closed', 1); // 오늘 하루 닫음 설정
  }

  // 해당 슬라이드를 숨기고 Swiper 업데이트
  slide.style.display = 'none';

  // 남아 있는 슬라이드를 확인
  const remainingSlides = document.querySelectorAll('#myModal .swiper-slide:not([style*="display: none"])');

  // 남아 있는 슬라이드가 없으면 모달 전체 숨기기 (어두운 배경 포함)
  if (remainingSlides.length === 0) {
    document.getElementById('myModal').style.display = 'none';
  } else {
    swModal.update(); // Swiper를 업데이트하여 변경사항 반영
  }
}

// 페이지 로드 시 각 슬라이드의 쿠키 확인하여 표시 여부 결정
window.addEventListener('load', function () {
  // '오늘 하루 열지 않음' 쿠키 확인
  if (getCookie("notToday") === "true") {
    document.getElementById('myModal').style.display = 'none';
    return;
  }

  // Swiper 초기화
  swModal = new Swiper('.sw-modal', {
    slidesPerView: 1,
    loop: false,
    pagination: {
      el: '#myModal .swiper-pagination', // modal 내의 페이지 네이션만 적용
      clickable: true,
      type: 'bullets',
    },
  });

  // 각 슬라이드에 대해 쿠키 확인 후 슬라이드 숨기기
  ['modal-wrap1', 'modal-wrap2', 'modal-wrap3'].forEach(slideId => {
    if (getCookie(slideId) === 'closed') {
      document.getElementById(slideId).style.display = 'none';
    }
  });

  // 초기화 후 남아 있는 슬라이드가 없으면 모달 전체 숨기기
  const remainingSlides = document.querySelectorAll('.swiper-slide:not([style*="display: none"])');
  if (remainingSlides.length === 0) {
    document.getElementById('myModal').style.display = 'none';
  } else {
    swModal.update();
  }
  
  // '오늘 하루 열지 않음' 체크박스 클릭 시 쿠키 설정
  document.querySelectorAll('.notToday').forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      if (checkbox.checked) {
        setCookie("notToday", "true", 1); // 1일 동안 유지되는 쿠키 설정
      } else {
        setCookie("notToday", "", -1); // 쿠키 삭제
      }
    });
  });

  // 각 닫기 버튼에 대해 슬라이드만 숨기기 설정
  document.querySelectorAll('.close-btn').forEach((closeButton, index) => {
    closeButton.addEventListener('click', function () {
      closeSlide(`modal-wrap${index + 1}`, `notToday${index + 1}`);
    });
  });
});

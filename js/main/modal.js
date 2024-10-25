window.addEventListener("load", function () {
  // 스와이퍼 초기화
  const swModal = new Swiper(".sw-modal", {
    slidesPerView: 1, // 한 번에 하나의 슬라이드만 보여줌
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   
    navigation: {
      nextEl: '.swiper-button-next', // 다음 슬라이드 버튼
      prevEl: '.swiper-button-prev', // 이전 슬라이드 버튼
    },
  });

  // 닫기 버튼 기능 추가
  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
  });
});
$(document).ready(function () {
  var modal = $("#myModal");
  var closeButton = $(".close-btn");
  var notTodayCheckbox = $("#notToday");

  // 쿠키 설정 함수
  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // 쿠키 확인 함수
  function getCookie(name) {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    var cookieName = name + "=";
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return "";
  }

  // 쿠키 확인: '오늘 하루 열지 않음'이 체크되어 있으면 팝업을 띄우지 않음
  if (getCookie("notToday") !== "true") {
    modal.show();
  }

  // '오늘 하루 열지 않음' 체크박스 클릭 시 쿠키 설정
  notTodayCheckbox.click(function () {
    if (notTodayCheckbox.is(":checked")) {
      setCookie("notToday", "true", 1); // 1일 동안 유지되는 쿠키 설정
    } else {
      setCookie("notToday", "", -1); // 쿠키 삭제
    }
  });

  // 닫기 버튼 클릭 시 모달 닫기
  closeButton.click(function () {
    modal.hide();
  });
});

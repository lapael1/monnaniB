document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('faqToggleBtn').addEventListener('click', function() {
    var faqSection = document.getElementById("faqSection");
    
    // display 속성을 토글하여 보여주기/숨기기 전환
    if (faqSection.style.display === "none" || faqSection.style.display === "") {
      faqSection.style.display = "block";  // 클릭 시 표시
    } else {
      faqSection.style.display = "none";  // 다시 클릭 시 숨김
    }
  });
});
$(document).ready(function () {
  // 탑버튼
  $(".topbtn").click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  var swiper = new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 1500,
  });
  $(document).ready(function () {
    // bbtn-container를 클릭했을 때
    $(".visualbtn1").click(function () {
      // 해당 링크로 이동
      window.location.href = "delivery.html";
    });
    $(".visualbtn2").click(function () {
      // 해당 링크로 이동
      window.location.href = "faq.html";
    });
    $("#buybtntag").click(function () {
      // 해당 링크로 이동
      window.location.href = "purchase.html";
    });
    $(".buybtn").click(function () {
      // 해당 링크로 이동
      window.location.href = "purchase.html";
    });
  });
});


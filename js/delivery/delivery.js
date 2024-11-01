window.addEventListener("load", function () {
  const swiper = new Swiper(".swiper-delivery", {
    slidesPerView: "auto", // 자동으로 슬라이드 개수 조정
    spaceBetween: 10, // 슬라이드 간격
  });


  const questions = document.querySelectorAll(".delivery-qna dt");

  questions.forEach((dt) => {
    dt.addEventListener("click", function () {
      const dd = this.nextElementSibling;

      if (dd.style.display === "none" || dd.style.display === "") {
        dd.style.display = "block";
      } else {
        dd.style.display = "none";
      }
    });
  });
});

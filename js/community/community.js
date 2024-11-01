document.addEventListener("DOMContentLoaded", function () {
  showPage(1); // 첫 페이지 로드 시 1번 페이지 리뷰 표시
});

// 각 페이지의 리뷰 데이터
const reviewData = {
  1: [
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pr1.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png"
    },
    // 페이지 1의 다른 리뷰 카드들 추가...
  ],
  2: [
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/pr2.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/cusstar.png"
    },
    // 페이지 2의 다른 리뷰 카드들 추가...
  ],
  3: [
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/pr3.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/cusstar.png"
    },
    // 페이지 3의 다른 리뷰 카드들 추가...
  ]
};

// 특정 페이지의 리뷰 데이터를 표시하는 함수
function showPage(pageNumber) {
  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerHTML = ""; // 기존 내용 초기화

  reviewData[pageNumber].forEach((review) => {
    const reviewCard = `
      <div class="revcard">
        <a href="#">
          <img src="${review.image}" alt="" class="revimg" />
          <div class="rev-overlay">
            <div class="overlay-top">
              <div class="overlay-name">
                <p>${review.name}</p>
              </div>
              <div class="overlay-date">
                <p>${review.date}</p>
              </div>
            </div>
            <div class="overlay-mid">
              <p>${review.comment}</p>
            </div>
            <div class="overlay-bot">
              <div class="overlay-thumb">
                <img src="${review.image}" alt="" style="width: 80px; height: 80px" />
              </div>
              <div class="overlay-stars">
                <div class="overlay-item">
                  <p>${review.product}</p>
                </div>
                <div class="overlay-star">
                  <img src="${review.stars}" alt="" style="width: 80px" />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;
    reviewContent.innerHTML += reviewCard;
  });

  // 현재 페이지 번호에 active 클래스 적용
  document.querySelectorAll(".page-number").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".page-number")[pageNumber - 1].classList.add("active");
}

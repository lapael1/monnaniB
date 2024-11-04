document.addEventListener("DOMContentLoaded", function () {
  adjustReviewsPerPage(); // 페이지당 리뷰 수 설정
  showPage(1, "all"); // 첫 페이지 로드 시 전체 리뷰 표시
  window.addEventListener("resize", adjustReviewsPerPage); // 창 크기 변경 시 이벤트
});

// 한 페이지에 표시할 리뷰 수 (초기값은 데스크탑용)
let reviewsPerPage = 9;
let currentPage = 1;
let currentFilter = "all";

// 각 페이지의 리뷰 데이터 (일부만 발췌)

const reviewData = {
  1: [
    {
      name: "못난이좋아님",
      date: "2024-11-06",
      comment: "못생겨도 정말 맛있었어요 저렴해서 자주 이용할 거 같아요.",
      image: "images/review/cus1.png",
      product: "몬나니농장 단호박",
      stars: "images/cusstar.png",
    },
    {
      name: "청렴농부님",
      date: "2024-11-04",
      comment:
        "못난이 농산물을 항상 폐기할 때마다 마음이 아팠는데 그러지 않아도 되서 정말 만족합니다.",
      image: "images/review/pro1.png",
      product: "몬나니농장 토마토",
      stars: "images/prostar.png",
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pro2.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/prostar.png",
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/cus2.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png",
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pro3.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/prostar.png",
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pro4.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/prostar.png",
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pro5.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/prostar.png",
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/cus4.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/cusstar.png",
    },
    {
      name: "못난이님",
      date: "2024-11-01",
      comment: "신선해보여서 바로 시켜봤는데 만족해요! 달콤하고 맛있었어요.",
      image: "images/review/pro6.png",
      product: "몬나니농장 테스트 과일",
      stars: "images/prostar.png",
    },
  ],
  2: [
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/pro7.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/prostar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/cus5.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/cusstar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/pro8.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/prostar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/cus6.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/cusstar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/cus7.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/cusstar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/cus8.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/cusstar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/cus9.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/cusstar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/pro9.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/prostar.png",
    },
    {
      name: "고구마님",
      date: "2024-10-21",
      comment: "신선하고 맛있어서 재주문할 계획입니다.",
      image: "images/review/pro10.png",
      product: "몬나니농장 달콤한 고구마",
      stars: "images/prostar.png",
    },
  ],
  3: [
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/pro3.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/prostar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/cus3.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/cusstar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/pro1.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/prostar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/cus2.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/cusstar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/pro1.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/prostar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/cus1.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/cusstar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/pro4.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/prostar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/pro5.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images.prostar.png",
    },
    {
      name: "사과님",
      date: "2024-09-15",
      comment: "부드럽고 맛있어서 추천드려요!",
      image: "images/review/pro6.png",
      product: "몬나니농장 부드러운 사과",
      stars: "images/prostar.png",
    },
  ],
};

// 화면 크기에 따라 한 페이지당 표시할 리뷰 수 조정
function adjustReviewsPerPage() {
  reviewsPerPage = window.innerWidth <= 768 ? 8 : 9;
  showPage(1, currentFilter); // 필터 유지한 채 첫 페이지 로드
}

let paginatedReviews = []; // 전역 변수로 선언

function showPage(pageNumber, filterType = "all") {
  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerHTML = ""; // 기존 내용 초기화
  currentPage = pageNumber;
  currentFilter = filterType;

  // 모든 페이지의 리뷰를 합쳐서 필터링
  const allReviews = Object.values(reviewData).flat();
  const filteredReviews = allReviews.filter((review) => {
    if (filterType === "all") return true;
    if (filterType === "customer" && review.stars.includes("cusstar"))
      return true;
    if (filterType === "producer" && review.stars.includes("prostar"))
      return true;
    return false;
  });

  // 페이지에 맞는 리뷰 가져오기
  const startIndex = (pageNumber - 1) * reviewsPerPage;
  paginatedReviews = filteredReviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  // 필터링된 리뷰 출력
  paginatedReviews.forEach((review, index) => {
    const badgeClass = review.stars.includes("prostar")
      ? "producer"
      : "customer";
    const badgeText = review.stars.includes("prostar")
      ? "생산자 리뷰"
      : "소비자 리뷰";

    const reviewCard = `
      <div class="revcard" style="position: relative;" onclick="showReviewModal(${index})">
        <div class="review-badge ${badgeClass}">${badgeText}</div>
        <img src="${review.image}" alt="" class="revimg" />
        <div class="rev-overlay">
          <div class="overlay-top">
            <div class="overlay-name"><p>${review.name}</p></div>
            <div class="overlay-date"><p>${review.date}</p></div>
          </div>
          <div class="overlay-mid"><p>${review.comment}</p></div>
          <div class="overlay-bot">
            <div class="overlay-thumb">
              <img src="${review.image}" alt="" style="width: 60px; height: 60px" />
            </div>
            <div class="overlay-stars">
              <div class="overlay-item" style="font-size:15px"><p>${review.product}</p></div>
              <div class="overlay-star">
                <img src="${review.stars}" alt="" style="width: 80px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    reviewContent.innerHTML += reviewCard;
  });

  // 페이지네이션 생성
  createPagination(filteredReviews.length);
}


function createPagination(totalReviews) {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = ""; // 기존 페이지네이션 초기화

  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("span");
    pageItem.className = "page-number";
    pageItem.setAttribute("data-page", i);
    pageItem.textContent = i;
    pageItem.onclick = () => showPage(i, currentFilter);
    paginationContainer.appendChild(pageItem);
  }
}

// 전체, 소비자, 생산자 리뷰 필터링 함수
function showFilteredReviews(filterType) {
  document
    .querySelectorAll(".rev-titlewrap span")
    .forEach((el) => el.classList.remove("active"));

  if (filterType === "all")
    document.querySelector(".alltitle").classList.add("active");
  if (filterType === "customer")
    document.querySelector(".custitle").classList.add("active");
  if (filterType === "producer")
    document.querySelector(".protitle").classList.add("active");

  showPage(1, filterType); // 필터 변경 시 첫 페이지로 이동
}
function showReviewModal(index) {
  const review = paginatedReviews[index];

  // 리뷰 이미지, 이름, 날짜, 코멘트, 제품 정보 설정
  document.getElementById("modalReviewImage").src = review.image;
  document.getElementById("modalReviewName").textContent = review.name;
  document.getElementById("modalReviewDate").textContent = review.date;
  document.getElementById("modalReviewComment").textContent = review.comment;
  document.getElementById("modalProductImage").src = review.image;
  document.getElementById("modalProductName").textContent = review.product;

  // 별점 표시 (rating 값이 없을 경우 기본값을 5로 설정)
  const starContainer = document.getElementById("modalReviewStars");
  starContainer.innerHTML = ""; // 별점 초기화
  const rating = review.rating || 5; // rating 값이 없으면 기본값 5
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("a");
    star.className = "bts bt-star " + (i < rating ? "active" : "");
    starContainer.appendChild(star);
  }

  // 모달 표시
  document.getElementById("reviewModal").style.display = "flex";
}

// 모달을 닫는 함수
function closeModal() {
  document.getElementById("reviewModal").style.display = "none";
}

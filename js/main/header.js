window.addEventListener("load", function () {
  showInitDashboard();

  function showInitDashboard() {
    // URL에서 쿼리 매개변수 가져오기
    const params = new URLSearchParams(window.location.search);
    const username = params.get("name"); // 여기서 name으로 변경

    // localStorage에 저장된 로그인된 사용자 정보 확인
    const loggedInUser = JSON.parse(localStorage.getItem("userFind")) || {};

    // URL에서 가져온 이름이 있으면 그 값을 사용하고, 없으면 localStorage의 값을 사용
    const displayName = username || loggedInUser.username; // 여기서 loggedInUser.username 사용

    if (displayName) {
      // 로그인 상태일 경우
      document.getElementById("login-button").style.display = "none"; // 로그인 버튼 숨김
      document.getElementById("signup-button").style.display = "none"; // 회원가입 버튼 숨김
      document.getElementById("login-display").style.display = "block"; // 로그인 사용자 정보 표시

      // 사용자 이름을 name-display에 출력
      document.getElementById("name-display").textContent = `${displayName}님`;
    } else {
      // 로그인 정보가 없으면 로그인 상태 초기화 (페이지 로드 시 체크)
      document.getElementById("login-button").style.display = "block"; // 로그인 버튼 표시
      document.getElementById("signup-button").style.display = "block"; // 회원가입 버튼 표시
      document.getElementById("login-display").style.display = "none"; // 로그인 정보 숨김
    }
  }

  // 로그아웃 처리
  document.getElementById("logout").addEventListener("click", function () {
    document.getElementById("login-button").style.display = "block"; // 로그인 버튼 표시
    document.getElementById("signup-button").style.display = "block"; // 회원가입 버튼 표시
    document.getElementById("login-display").style.display = "none"; // 로그인 정보 숨김
    clearUserData();
    clearUsernameParam();
    window.location.href = "index.html";
  });

  function clearUserData() {
    localStorage.removeItem("userFind"); // 로그인 데이터 삭제
  }

  function clearUsernameParam() {
    var url = new URL(window.location.href);
    url.searchParams.delete("name"); // 여기서 name으로 변경
    window.history.replaceState({}, "", url.toString());
  }

  function closeIcon() {
    var img = document.createElement("img");
  }
  const headerClose = this.document.querySelector(".header-close");
  const headerToggle = this.document.querySelector(".header-toggle");
  headerClose.addEventListener("click", function () {
    headerToggle.classList.toggle("active");
  });

  // header-close 요소와 img 요소 선택
  // const headerClose = document.getElementById('header-close');
  const menuIcon = document.getElementById("menu-icon");

  // 이미지 상태 토글을 위한 초기 값 설정
  let isMenuOpen = false; // 현재 상태를 저장하는 변수

  // 클릭 이벤트 추가
  headerClose.addEventListener("click", function () {
    if (isMenuOpen) {
      // 메뉴가 열려 있으면 다시 icon_menu.png로 변경
      menuIcon.src = "images/icons/icon_menu.png";
    } else {
      // 메뉴가 닫혀 있으면 icon_close.png로 변경
      menuIcon.src = "images/icons/icon_close.svg";
    }

    // 상태 토글 (true <-> false)
    isMenuOpen = !isMenuOpen;
  });

  function adjustCartMenuMargin() {
    const headerLogin = document.getElementById("header-login");
    const cartMenu = document.getElementById("cart-menu");

    if (window.innerWidth > 1180) {
      // 1180px 초과일 때만 적용
      if (headerLogin && cartMenu) {
        const headerLoginWidth = headerLogin.offsetWidth;
        cartMenu.style.marginRight = `${headerLoginWidth + 50}px`;
      }
    } else {
      cartMenu.style.marginRight = "0";
    }
  }

  // 초기 로딩 시 실행
  adjustCartMenuMargin();

  // 창 크기 조정 시 실행
  window.addEventListener("resize", adjustCartMenuMargin);
});

window.onload = function () {
  document.getElementById("bag-link").addEventListener("click", function (event) {
    // 'userFind' 항목이 localStorage에 있는지 확인
    const userFind = JSON.parse(localStorage.getItem("userFind")) || {};

    if (userFind.username) {
      // 로그인 상태일 경우 bagitem.html로 이동
      window.location.href = "bagitem.html";
    } else {
      // 로그아웃 상태일 경우 경고 메시지 및 로그인 페이지로 이동
      event.preventDefault();
      alert("로그인하세요");
      window.location.href = "login.html";
    }
  });
};

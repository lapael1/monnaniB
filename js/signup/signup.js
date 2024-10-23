window.addEventListener("load", function () {
  const signUpForm = this.document.getElementById("signup-form");
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // 입력된 회원정보 가져오기
    const idInput = document.getElementById("signup-id");
    const pwInput = document.getElementById("signup-pw");
    const pwChkInput = document.getElementById("signup-pw-chk");
    const usernameInput = document.getElementById("signup-name");
    const emailInput = document.getElementById("signup-email");
    const phoneInput = document.getElementById("signup-phone");
    const id = idInput.value.trim();
    const pw = pwInput.value.trim();
    const pwChk = pwChkInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    // 아이디는 영어와 숫자로만
    const idRegex = /^[a-zA-Z0-9]+$/;
    // 비밀번호는 영어 대소문자 숫자 특수문자를 포함한 8자리 이상
    const pwRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!idRegex.test(id)) {
      alert("아이디는 영문자와 숫자로만 이루어져야 합니다.");
      return;
    }
    if (!pwRegex.test(pw)) {
      alert(
        "비밀번호는 영대소문자, 숫자, 특수문자를 포함하여 최소 8자 이상 작성 해야 합니다."
      );
      return;
    }
    if (pw !== pwChk) {
      alert("비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
      return;
    }
    const newUser = {
      id: id,
      password: pw,
      username: username,
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("가입이 완료 되었습니다. 로그인 페이지로 이동합니다.");
    window.location.href = "login.html";
  });
  const agreeAllCheckbox = document.getElementById("agree-all");
  const agreeItems = document.querySelectorAll(".agree-item");

  // "전체 동의" 체크박스를 클릭할 때
  agreeAllCheckbox.addEventListener("change", function () {
    agreeItems.forEach(function (checkbox) {
      checkbox.checked = agreeAllCheckbox.checked;
    });
  });

  // 개별 동의 체크박스들을 클릭할 때
  agreeItems.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // 개별 체크박스 중 하나라도 선택되지 않으면 "전체 동의" 체크 해제
      if (!checkbox.checked) {
        agreeAllCheckbox.checked = false;
      }
      // 모든 개별 항목이 선택되면 "전체 동의" 자동 체크
      if (Array.from(agreeItems).every((item) => item.checked)) {
        agreeAllCheckbox.checked = true;
      }
    });
  });
});

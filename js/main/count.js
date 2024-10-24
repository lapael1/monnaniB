/**
 * 숫자 애니메이션 함수
 * * 숫자 애니메이션 함수
 * @param {HTMLElement} element - 애니메이션을 적용할 요소
 * @param {number} start - 시작 값
 * @param {number} end - 종료 값
 * @param {number} duration - 애니메이션 지속 시간 (밀리초)
 * @param {number} decimals - 소수점 자릿수
 */
function animateValue(element, start, end, duration, decimals = 0) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let value = progress * (end - start) + start;
    if (decimals > 0) {
      value = value.toFixed(decimals);
    } else {
      value = Math.floor(value);
    }
    element.innerText = parseFloat(value).toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

/**
 * 반복적으로 숫자 카운터 애니메이션을 적용하는 함수
 * @param {HTMLElement} element - 애니메이션을 적용할 요소
 * @param {number} max - 최대값 (종료 값)
 */
function counter(element, max) {
  let now = max;

  const handle = setInterval(() => {
    element.innerHTML = Math.ceil(max - now).toLocaleString();

    // 목표수치에 도달하면 정지
    if (now < 1) {
      clearInterval(handle);
    }

    // 증가되는 값이 계속하여 작아짐
    const step = now / 10;

    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now -= step;
  }, 60);
}

/**
 * 모든 숫자 요소에 애니메이션 적용
 */

window.addEventListener("load", function () {
  // 두 번째 JS 파일의 기능
  function startAnimations() {
    const rescuedProduceElement = document.getElementById("rescued-produce");
    animateValue(rescuedProduceElement, 0, 2226227, 2000);

    const savedWaterElement = document.getElementById("saved-water");
    animateValue(savedWaterElement, 0, 44970, 2000);

    const savedPlasticElement = document.getElementById("saved-plastic");
    animateValue(savedPlasticElement, 0, 1149335, 2000);

    const reducedCarbonElement = document.getElementById("reduced-carbon");
    animateValue(reducedCarbonElement, 0, 1331061, 2000);

    const counterElement1 = document.getElementById("rescued-produce");
    counter(counterElement1, 2226227);

    const counterElement2 = document.getElementById("saved-water");
    counter(counterElement2, 44970);

    const counterElement3 = document.getElementById("saved-plastic");
    counter(counterElement3, 1149335);

    const counterElement4 = document.getElementById("reduced-carbon");
    counter(counterElement4, 1331061);
  }

  startAnimations();
  setInterval(startAnimations, 10000);
});
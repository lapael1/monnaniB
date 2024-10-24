// js
window.addEventListener("load",function(){
    function updateImages() {
        let screenWidth = window.innerWidth;
    
        // 이미지 요소 선택
        let visual1 = document.getElementById('visual1');
        let visual2 = document.getElementById('visual2');
    
        // 화면이 1024px 이하일 때 모바일 이미지로 교체
        if (screenWidth <= 1024) {
            visual1.setAttribute("src", "images/visual1-mobile.png");
            visual2.setAttribute("src", "images/visual2-mobile.png");
        } else {
            // 1024px 이상일 때 원래 이미지로 복구
            visual1.setAttribute("src", "images/visual1.png");
            visual2.setAttribute("src", "images/visual2.png");
        }
    }
    
    // 페이지 로드 시 호출
    window.onload = updateImages;
    
    // 화면 크기 조정 시마다 호출
    window.onresize = updateImages;
})
// jquery
$(document).ready(function () {

})
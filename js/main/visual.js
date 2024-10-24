// js
window.addEventListener("load", function () {
    // 첫 번째 JS 파일의 기능
    function updateImages() {
      let screenWidth = window.innerWidth;
      let visual1 = document.getElementById("visual1");
      let visual2 = document.getElementById("visual2");
  
      if (screenWidth <= 1024) {
        visual1.setAttribute("src", "images/visual1-mobile.png");
        visual2.setAttribute("src", "images/visual2-mobile.png");
      } else {
        visual1.setAttribute("src", "images/visual1.png");
        visual2.setAttribute("src", "images/visual2.png");
      }
    }
  
    updateImages();
    window.onresize = updateImages;
  });
  // jquery
  $(document).ready(function () {});
  
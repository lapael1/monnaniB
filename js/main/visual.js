document.addEventListener("DOMContentLoaded", function () {
  function updateImages() {
    let screenWidth = window.innerWidth;
    let visual1 = document.getElementById("visual1");
    let visual2 = document.getElementById("visual2");

    if (screenWidth <= 480) {
      visual1.setAttribute("src", "images/visual-banner1.png");
      visual2.setAttribute("src", "images/visual-banner2.png");
    } else if (screenWidth <= 1024) {
      visual1.setAttribute("src", "images/visual1-mobile1.png");
      visual2.setAttribute("src", "images/visual2-mobile.png");
    } else {
      visual1.setAttribute("src", "images/visual1.png");
      visual2.setAttribute("src", "images/visual2.png");
    }
  }

  updateImages();
  window.onresize = updateImages;
});

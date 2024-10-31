window.addEventListener("load",function(){
    // data.json을 로딩, 연결시킨다.
  const xhttp = new XMLHttpRequest();
  //    console.log(xhttp);
  xhttp.onreadystatechange = function (e) {
    const req = e.target;

    if (req.readyState === XMLHttpRequest.DONE) {
        const str = req.response;
        // console.log(str);
        //   json문자열로 변화 JSON.parse(str)
        let obj = JSON.parse(str);
        PURCHASE = obj.purchase;
        showPurchase()
    }
}
 //   자료호출
 xhttp.open("GET", "purchase.json");
 xhttp.send();
let PURCHASE
let purchase = document.getElementById("market-list")
function showPurchase(){
    let html =""
    PURCHASE.forEach(function(item){
        const seasonButton = item.season ? `<li class="season" >${item.season}</li>`:"";
        const monnaniButton = item.monnani ? `<li class="monnani" >${item.monnani}</li>`:"";

        const tag =`
        <li>
              <a href="#">
                <img src="images/purchase/${item.image}" alt="${item.name}" />
              </a>
              <ul class="purchase-type">
              ${monnaniButton}
              ${seasonButton}
              </ul>
              <a href="">
                <p class="market-name">${item.name}</p>
              </a>
              <div class="price-container">
                <p class="market-price">
                  <span class="market-discount">${item.discount}</span>${item.price}원
                </p>
                <img
                  src="images/icons/discount_arrow.svg"
                  alt="arrow"
                  class="discount_arrow"
                />
              </div>
              <div class="market-star">
                <img src="images/icons/star.svg" alt="star" />
                <p class="market-rate">4.9</p>
              </div>
            </li>
            `
            html += tag
    })
    purchase.innerHTML = html
}
console.log(PURCHASE)

})
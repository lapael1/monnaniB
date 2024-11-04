window.addEventListener("load", function () {
  let selectedProducts = [];

  function toggleOptions() {
    const optionList = document.getElementById("option-list");
    optionList.style.display = optionList.style.display === "none" ? "block" : "none";
  }

  function addProduct(name, price) {
    const existingProduct = selectedProducts.find((product) => product.name === name);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      selectedProducts.push({ name, price, quantity: 1 });
    }
    renderSelectedProducts();
  }

  function renderSelectedProducts() {
    const selectedList = document.getElementById("selected-list");
    selectedList.innerHTML = "";

    selectedProducts.forEach((product, index) => {
      const item = document.createElement("li");
      item.className = "selected-item";
      item.innerHTML = `
                <span class="selected-name">${product.name}</span>
                <div class="selected-controls">
                    <span class="selected-price">${(product.price * product.quantity).toLocaleString()}원</span>
                    <div class="quantity-controls">
                        <button class="quantity-decrease" onclick="changeQuantity(${index}, -1)">
                            -
                        </button>
                        <span class="quantity-value">${product.quantity}</span>
                        <button class="quantity-increase" onclick="changeQuantity(${index}, 1)">
                            +
                        </button>
                    </div>
                    <button class="remove-button" onclick="removeProduct(${index})">
                        X
                    </button>
                </div>
            `;
      selectedList.appendChild(item);
    });

    updateTotalPrice();
  }

  function changeQuantity(index, amount) {
    selectedProducts[index].quantity += amount;
    if (selectedProducts[index].quantity <= 0) {
      selectedProducts.splice(index, 1);
    }
    renderSelectedProducts();
  }

  function removeProduct(index) {
    selectedProducts.splice(index, 1);
    renderSelectedProducts();
  }

  function updateTotalPrice() {
    const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
    document.getElementById("total-price").innerText = `${totalPrice.toLocaleString()}원`;
  }

  // 상품 추가 이벤트 리스너 등록
  document.getElementById("product1").addEventListener("click", function () {
    addProduct("몬나니농장 몬나니 노지감귤 2kg", 15900);
  });

  document.getElementById("product2").addEventListener("click", function () {
    addProduct("몬나니농장 노지감귤 2kg", 23000);
  });

  // 옵션 토글 이벤트 리스너 등록
  document.querySelector(".option-toggle").addEventListener("click", toggleOptions);
});

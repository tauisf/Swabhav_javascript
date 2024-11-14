const nameDiv = document.createElement("div");
    nameDiv.innerText = "Shopping Cart";
    nameDiv.classList.add("name", "navbar", "bg-primary", "text-white", "p-3");
    document.body.appendChild(nameDiv);

    const formDiv = document.createElement("div");
    formDiv.innerText = "Form";
    formDiv.classList.add("form-control", "d-flex", "flex-column", "p-3");
    document.body.appendChild(formDiv);

    const selectProductLabel = document.createElement("label");
    selectProductLabel.textContent = "Select Products";
    const selectProduct = document.createElement("select");
    const Products = ["Apple", "Banana", "Grapes", "Jackfruit"];
    Products.forEach((product) => {
      const selectProductOption = document.createElement("option");
      selectProductOption.textContent = product;
      selectProduct.appendChild(selectProductOption);
    });
    formDiv.appendChild(selectProductLabel);
    formDiv.appendChild(selectProduct);

    const itemCostLabel = document.createElement("label");
    itemCostLabel.textContent = "Item Cost";
    const itemCostInput = document.createElement("input");
    itemCostInput.type = "number";
    formDiv.appendChild(itemCostLabel);
    formDiv.appendChild(itemCostInput);

    const productCosts = {
      "Apple": 10,
      "Banana": 5,
      "Grapes": 7,
      "Jackfruit": 15
    };

    selectProduct.addEventListener("change", () => {
      const selectedProduct = selectProduct.value;
      itemCostInput.value = productCosts[selectedProduct] || 0;
    });

    itemCostInput.value = productCosts[Products[0]];

    const quantityCostLabel = document.createElement("label");
    quantityCostLabel.textContent = "Quantity";
    const selectQuantity = document.createElement("select");
    for (let i = 1; i <= 10; i++) {
      const selectQuantityOption = document.createElement("option");
      selectQuantityOption.textContent = `${i}`;
      selectQuantity.appendChild(selectQuantityOption);
    }
    formDiv.appendChild(quantityCostLabel);
    formDiv.appendChild(selectQuantity);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.classList.add("btn", "btn-primary");
    formDiv.appendChild(submitButton);

    const cartDiv = document.createElement("div");
    cartDiv.innerText = "Cart";
    cartDiv.classList.add("cart", "mt-4");
    document.body.appendChild(cartDiv);

    const priceDiv = document.createElement("div");
    priceDiv.innerText = "Total Price: $0";
    priceDiv.classList.add("price", "mt-3");
    document.body.appendChild(priceDiv);

    let totalPrice = 0;

    let cartProductDiv = document.createElement("div");
    cartProductDiv.classList.add("preview-div", "border", "border-black", "p-3", "mt-3");

    let table = document.createElement("table");
    table.classList.add("table", "table-bordered", "mb-3", "table-striped");

    let tableHeader = document.createElement("thead");
    tableHeader.innerHTML = `
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Subtotal</th>
        <th>Actions</th>
      </tr>
    `;
    table.appendChild(tableHeader);

    submitButton.addEventListener('click', () => {
      const selectedProduct = selectProduct.value;
      let quantity = parseInt(selectQuantity.value, 10);
      const unitPrice = parseInt(itemCostInput.value, 10);
      let subtotal = quantity * unitPrice;

      let tableBody = document.createElement("tbody");
      let row = document.createElement("tr");

      row.innerHTML = `
        <td>${selectedProduct}</td>
        <td>
          <button class="decrease-btn btn btn-warning btn-sm">-</button>
          <span class="quantity-display">${quantity}</span>
          <button class="increase-btn btn btn-warning btn-sm">+</button>
        </td>
        <td>${unitPrice}</td>
        <td class="subtotal">${subtotal}</td>
        <td><button class="remove-btn btn btn-danger btn-sm">Remove</button></td>
      `;
      tableBody.appendChild(row);
      table.appendChild(tableBody);

      cartProductDiv.appendChild(table);
      cartDiv.appendChild(cartProductDiv);

      totalPrice += subtotal;
      priceDiv.innerText = `Total Price: $${totalPrice}`;

      const increaseBtn = row.querySelector(".increase-btn");
      const decreaseBtn = row.querySelector(".decrease-btn");
      const quantityDisplay = row.querySelector(".quantity-display");
      const subtotalDisplay = row.querySelector(".subtotal");
      const removeBtn = row.querySelector(".remove-btn");

      increaseBtn.addEventListener("click", () => {
        quantity++;
        quantityDisplay.textContent = quantity;
        subtotal = quantity * unitPrice;
        subtotalDisplay.textContent = subtotal;

        totalPrice += unitPrice;
        priceDiv.innerText = `Total Price: $${totalPrice}`;
      });

      decreaseBtn.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          quantityDisplay.textContent = quantity;
          subtotal = quantity * unitPrice;
          subtotalDisplay.textContent = subtotal;

          totalPrice -= unitPrice;
          priceDiv.innerText = `Total Price: $${totalPrice}`;
        }
      });

      removeBtn.addEventListener("click", () => {
        table.removeChild(tableBody);
        totalPrice -= subtotal;
        priceDiv.innerText = `Total Price: $${totalPrice}`;
      });
    });

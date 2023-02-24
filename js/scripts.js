// Business Logic
function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.orderToppings = toppings;
}

Pizza.prototype.calculatePrice = function () {
  let totalPrice = 0;
  if (this.pizzaSize === "large") {
    totalPrice = 8;
  } else if (this.pizzaSize === "medium") {
    totalPrice = 6;
  } else {
    totalPrice = 4;
  }

  if (this.orderToppings === 3) {
    totalPrice += 3;
  } else if (this.orderToppings === 2) {
    totalPrice += 2;
  } else if (this.orderToppings === 1) {
    totalPrice += 1;
  }
  return totalPrice;
};

// User logic
window.addEventListener("load", function () {
  const form = document.getElementById("pizza-order");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const orderName = document.querySelector(".customer-name").value;
    const orderSize = document.querySelector(".pizza-size").value;

    let orderToppings = 0;
    for (let i = 0; i < document.pizzaorder.topping.length; i++) {
      if (document.pizzaorder.topping[i].checked == true) {
        orderToppings += 1;
      }
    }

    const newOrder = new Pizza(orderSize, orderToppings);

    document.querySelector("#total").textContent =
      "$" + newOrder.calculatePrice().toFixed(2);
    document.querySelector("#name").textContent = orderName;
    document.querySelector("#show-price").style.display = "block";
  });
});

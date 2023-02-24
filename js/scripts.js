// Business Logic
function Pizza(name, size, toppings) {
  this.customerName = name;
  this.pizzaSize = size;
  this.orderToppings = toppings;
}

Pizza.prototype.getBasePrice = function () {
  if (this.pizzaSize === "extra-large") {
    return 10;
  } else if (this.pizzaSize === "large") {
    return 8;
  } else if (this.pizzaSize === "medium") {
    return 6;
  } else {
    return 4;
  }
};

Pizza.prototype.getToppingsPrice = function () {
  if (this.orderToppings === 4) {
    return 4;
  } else if (this.orderToppings === 3) {
    return 3;
  } else if (this.orderToppings === 2) {
    return 2;
  } else if (this.orderToppings === 1) {
    return 1;
  } else {
    return 0;
  }
};

Pizza.prototype.calculatePrice = function () {
  const basePrice = this.getBasePrice();
  const toppingsPrice = this.getToppingsPrice();
  return basePrice + toppingsPrice;
};

// User Logic
function handleFormSubmission(event) {
  event.preventDefault();

  const orderName = document.querySelector(".customer-name").value;
  const orderSize = document.querySelector(".pizza-size").value;

  let orderToppings = 0;
  for (let i = 0; i < document.pizzaorder.topping.length; i++) {
    if (document.pizzaorder.topping[i].checked === true) {
      orderToppings += 1;
    }
  }

  const newOrder = new Pizza(orderName, orderSize, orderToppings);

  document.querySelector("#total").textContent =
    "$" + newOrder.calculatePrice().toFixed(2);
  document.querySelector("#name").textContent = orderName;
  document.querySelector("#show-price").style.display = "block";
}

window.addEventListener("load", function () {
  const form = document.querySelector("form#pizza-order");
  form.addEventListener("submit", handleFormSubmission);
});

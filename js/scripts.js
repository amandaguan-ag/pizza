// Business Logic
function Pizza(name, size, toppings) {
    this.customerName = name;
    this.pizzaSize = size;
    this.orderToppings = toppings;
  }
  
  Pizza.prototype.calculatePrice = function () {
    var totalPrice = 0;
      if (this.pizzaSize === "extra-large") {
        this.totalPrice = 10;
      } else if (this.pizzaSize === "large") {
        this.totalPrice = 8;
      } else if (this.pizzaSize === "medium") {
        this.totalPrice = 6;
      } else {
        this.totalPrice = 4;
      }
  
      if (this.orderToppings === 4) {
        this.totalPrice += 4;
      } else if (this.orderToppings === 3) {
        this.totalPrice += 3;
      } else if (this.orderToppings === 2) {
        this.totalPrice += 2;
      } else if (this.orderToppings === 1) {
        this.totalPrice += 1;
      } else {
      }
      return this.totalPrice;
    }
  
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
  
    document.querySelector("#total").textContent = "$" + newOrder.calculatePrice().toFixed(2);
    document.querySelector("#name").textContent = orderName;
    document.querySelector("#show-price").style.display = "block";
  }
  
  window.addEventListener("load", function () {
    const form = document.querySelector("form#pizza-order");
    form.addEventListener("submit", handleFormSubmission);
  });
  
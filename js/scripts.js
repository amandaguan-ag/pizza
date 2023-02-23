//business Logic

function Pizza(size, toppings) {
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
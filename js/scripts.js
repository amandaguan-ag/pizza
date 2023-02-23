//BUSINESS LOGIC//

//Pizza Object Constructor
function Pizza() {
    this.pizzaSize = "";
    this.baseCost = 0;
    this.individToppingCost = 0;
    this.toppingsArray = [];
    this.numToppings = 1,
    this.pizzaCost = 0;
}

//Pizza Object Methods
Pizza.prototype.setBaseCost = function(){
    if (this.pizzaSize === "small") {
        this.baseCost = 10;
    } else if (this.pizzaSize === "medium") {
        this.baseCost = 12;
    } else if (this.pizzaSize === "large") {
        this.baseCost = 14;
    } 
    return this.baseCost;
}

Pizza.prototype.setIndividToppingCost = function(){
    if (this.pizzaSize === "small") {
        this.individToppingCost = 1;
    } else if (this.pizzaSize === "medium") {
        this.individToppingCost = 1.5;
    } else if (this.pizzaSize === "large") {
        this.individToppingCost = 2;
    } 
    return this.individToppingCost;
}

Pizza.prototype.setToppingsArray = function(){
    this.toppingsArray = [];
    for (i = 0; i < this.numToppings; i++) {
        this.toppingsArray.push("topping");
    }
    return this.toppingsArray;
}
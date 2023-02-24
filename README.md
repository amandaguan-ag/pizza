# _Pizza Parlor_
#### By _**Amanda Guan**_
## Description
_This is a webpage that allows the user to create a pizza order (pizza size and toppings) and see how much it will cost based on their selections._
## link to Github Page
_Not available _
## Technologies Used
- _HTML_
- _CSS_
- _bootstrap_
- _Javascript_
## Setup/Installation Requirements
- _Clone this repository to your desktop_
- _Navigate to the top level of the directory_
- _Open index.html_
## Known Bugs
- No known bugs
## License
_Copyright (c) 2023, Amanda GUan_
## Contact Information
Amanda Guan <ag.amandaguan@gmail.com>

# TDD:
Describe Pizza();

Test 1: "It should return a pizza object with two properties for size and toppings"<br /> 
Code: const myPizza = new Pizza("small", ["pepperoni", "Mushrooms"]);<br />
Expected Output: Pizza { size: "small", toppings: ["pepperoni", "Mushrooms"] };<br />

Describe Pizza.prototype.calculatePrice();

Test 1: "It should add the size cost to the toppings cost and return the total cost of the pizza object"<br /> 
Code: let pizza1 = new Pizza("small", 1); pizza1.calculatePrice(); <br />
Expeected Output: 5<br />

Test 2: "It should add the size cost to the toppings cost and return the total cost of the pizza object"<br /> 
Code: let pizza2 = new Pizza("medium", 2); pizza2.calculatePrice(); <br />
Expeected Output: 8<br />

Test 3: "It should add the size cost to the toppings cost and return the total cost of the pizza object"<br /> 
Code: let pizza3 = new Pizza("large", 3); pizza3.calculatePrice();<br />
Expeected Output: 11<br />

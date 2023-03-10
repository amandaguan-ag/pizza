# _Pizza Parlor_

#### By _**Amanda Guan**_

## Description

_This is a webpage that allows the user to create a pizza order (pizza size and toppings) and see how much it will cost based on their selections._

## Lesson learnt
- I structured the application data with JavaScript objects created with constructor functions. 
- I added functionality to Pizza objects by creating getBasePrice, getToppingsPrice, and calculatePrice methods to the object's prototype. 
- To ensure that the application is efficient and effective, I implemented the 'separation of concerns' principle to create JavaScript functions that focus on doing just one thing. 
- Additionally, I used event delegation to attach an event listener to a parent element that fires for a child element, which enhances the application's functionality and user experience.

## link to Github Page

amandaguan-ag.github.io/pizza/

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

## TDD:

#### Describe: Pizza()

Test: "It should return a Pizza object with three properties for buyer name, size and toppings"<br />
Code: const pizza = new Pizza("Bob", "medium", 3);<br />
Expected Output: Pizza { customerName: "Bob", pizzaSize: "medium", orderToppings: 3 }<br />

#### Describe: Pizza.prototype.getBasePrice()

Test 1: "It should return base price for extra-large pizza"<br />
Code: const pizza = new Pizza("Bob", "extra-large", 3); const result = pizza.getBasePrice();<br />
Expected Output:10<br />

Test 2: "It should return base price for large pizza"<br />
Code: const pizza = new Pizza("Bob", "large", 3); const result = pizza.getBasePrice();<br />
Expected Output:8<br />

Test 3: "It should return base price for medium pizza"<br />
Code: const pizza = new Pizza("Bob", "medium", 3); const result = pizza.getBasePrice();<br />
Expected Output:6<br />

Test 4: "It should return base price for small pizza"<br />
Code: const pizza = new Pizza("Bob", "small", 3); const result = pizza.getBasePrice();<br />
Expected Output:4<br />

#### Describe: Pizza.prototype.getToppingsPrice()

Test 1: "It should return toppings price for 4 toppings"<br />
Code: const pizza = new Pizza("Bob", "medium", 4); const result = pizza.getToppingsPrice();<br />
Expected Output:4<br />

Test 2: "It should return toppings price for 3 toppings"
Code: const pizza = new Pizza("Bob", "medium", 3); const result = pizza.getToppingsPrice();
Expected Output:3<br />

Test 3: "It should return toppings price for 2 toppings"
Code: const pizza = new Pizza("Bob", "medium", 2); const result = pizza.getToppingsPrice();
Expected Output:2<br />

Test 4: "It should return toppings price for 1 toppings"
Code: const pizza = new Pizza("Bob", "medium", 1); const result = pizza.getToppingsPrice();
Expected Output:1<br />

Test 5: "It should return toppings price for 0 toppings"
Code: const pizza = new Pizza("Bob", "medium", 0); const result = pizza.getToppingsPrice();
Expected Output:0<br />

#### Describe: Pizza.prototype.calculatePrice()

Test: "It should calculate the total price of a pizza"<br />
Code: const pizza = new Pizza("Bob", "medium", 4); const result = pizza.calculatePrice();<br />
Expected Output:10<br />
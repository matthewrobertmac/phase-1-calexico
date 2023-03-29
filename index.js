// Write your code here...
let menuItemDiv = document.getElementById("menu-items")
let dish = document.querySelector("#dish")
let dishImage = document.getElementById("dish-image")
let dishName = document.getElementById("dish-name")
let dishDescription = document.getElementById("dish-description")
let dishPrice = document.getElementById("dish-price")

// submit form variables
var inputButton = document.querySelector("input#button")
let cartAmount = document.getElementById("cart-amount")
let numberInCart = document.getElementById("number-in-cart")
let form = document.querySelector("#cart-form")



// STUDY e.target["cart-amount"].value

fetch("http://localhost:3000/menu")
  .then((response) => response.json())
  .then((menuItems) => createMenuItems(menuItems));
  form.addEventListener("submit", (e) => {
    e.preventDefault(),
    console.log(e.target["cart-amount"].value),
    numberInCart.textContent = (parseInt(numberInCart.textContent) + parseInt(e.target["cart-amount"].value))

});



function createMenuItems(menuItems) {
    menuItems.forEach((menuItem) => {

        let menuItemName;
        menuItemName = document.createElement("span");
        menuItemName.textContent = menuItem.name;
        menuItemImage = menuItem.image;
        menuItemDescription = menuItem.description;
        menuItemPrice = menuItem.price;
        menuItemDiv.appendChild(menuItemName);
        menuItemName.addEventListener("click", () => {
            dishImage.src = menuItem.image;
            dishName.textContent = menuItem.name;
            dishDescription.textContent = menuItem.description;
            dishPrice.textContent = menuItem.price;
            })
        
        

        
        });
        

        

};


/*
let button = selectElementById("button")
let counter = 0;

## Challenge #4
The user should be able to add the menu items to their cart. When the user presses the 'Add to Cart' button, that number should be added to however many are currently in the cart.

For example, if there are currently 2 burritos in the cart, and the user adds 2 more, the total should be 4.

*/
// Create your burger


// Utilities

var button = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredients = document.getElementsByClassName("ingredient-checkbox"); 
/* Ingredients - class ingredient-checkbox - they all 've this class in HTML */
console.log(ingredients); /* HTML collection (a kind of array) - HTML input from 1 to 6 - So now we need a loop for */

var displayPrice = document.getElementById("price");

// Price

// An event listener is needed.  

/** =  The addEventListener() method attaches an event handler to the specified element.

The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

You can add many event handlers to one element.

You can add many event handlers of the same type to one element, i.e two "click" events.

*/


button.addEventListener("click", function (){
    //console.log("Click!");
    var name = burgerName.value.trim();
    console.log(name); //specific moment
           
    // burger name required
    //Decision making
    // I wanna see if the number of characters is different from 0. I could also use !== null

    if(name.length === 0 ) {  
        alert("Please, insert your burger's name!");

    } else {
        // + ingredients price
        var price = 50;

        // Which elements of type checkbox are currently checked?
        //Their values are needed and they all are different so I need a loop for

        for(i = 0; i < ingredients.length; i++) {
            var ingredientCheck = ingredients[i]; /*  variable created to avoid [i] repetition */
            console.log(ingredientCheck.checked);
            /* HTMLCollection(6) [input#cheese.ingredient-checkbox, 
                input#tomato.ingredient-checkbox, 
                input#egg.ingredient-checkbox, 
                input#lettuce.ingredient-checkbox, 
                input#mustard.ingredient-checkbox, 
                input#ketchup.ingredient-checkbox, cheese: 
                input#cheese.ingredient-checkbox, tomato: 
                input#tomato.ingredient-checkbox, egg: 
                input#egg.ingredient-checkbox, lettuce: 
                input#lettuce.ingredient-checkbox, mustard: 
                input#mustard.ingredient-checkbox, …] */
            // is it checked or not?

            if(ingredientCheck.checked === true) {
                console.log(ingredientCheck.value);
                price = price + parseInt(ingredientCheck.value);
            }
    }
console.log(price);

// Print the price
displayPrice.innerHTML = price.toFixed(2);
}  

});
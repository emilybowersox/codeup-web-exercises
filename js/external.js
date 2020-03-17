"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color: ');
if(userInput == false)
{
    alert("Sorry, I didn't catch that.");
}
else if(userInput !== null)
{
    alert("Great! " + userInput.charAt(0).toUpperCase() + userInput.slice(1) + " is my favorite color too!");
//  could also just be
//  alert("Great, " + userInput + " is my favorite color too!");
}

console.log('The user has entered ' + userInput + ".");



var moviePriceGuess = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");
if(moviePriceGuess === 27)
{
    alert("Congrats! $27 is the correct answer.");
}
else if(moviePriceGuess !== 27)
{
    alert("The correct answer is actually $27.")
}

console.log('The user has guessed ' + moviePriceGuess + ".");



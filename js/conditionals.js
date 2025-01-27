"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


var enterNumber = confirm ("Would you like to enter a number?");
//that is a boolean statement ^ - ok would equal true, cancel would equal false

if (enterNumber) {
    var userNumber = prompt("Please enter a number here:");
    var parsedNumber = parseInt(userNumber);

    //console.log(parsedNumber isNaN(parsedNumber));

    if(isNaN(parsedNumber)) {
        alert("That was not a number");
    } else {
        // store the text "even" or "odd"
        var evenOrOdd = (parsedNumber % 2 === 0) ? "even" : "odd";
        //have to create a new variable that will state that
        //if it's true assign "even," if it's false alert "odd"
        //create a new variabe to store the information ^
        alert("The number is " + evenOrOdd + ".");

        var plus100 = parsedNumber + 100;
        alert("Your number + 100 is equal to " + plus100 + ".");

        var negativeOrPositive = (parsedNumber >= 0) ? "positive" : "negative";
        alert("The number is " + negativeOrPositive + ".")
    }
}





//here's the way to do it with functions (so the functions would be reusable)
/*function promptForNumber () {
    var userNumber = prompt("Please enter your number here:");
    return parseInt(userNumber);
}

function evenOrOdd(aNumber) {
    if(aNumber % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function plus100(aNumber) {
    return aNumber + 100;
}

function negativeOrPositive(aNumber) {
    return (parsedNumber >= 0) ? "positive" : "negative";
}


if(isNaN(parsedNumber)) {
    alert("That was not a number");
} else {

    alert("The number is " + evenOrOdd(parsedNumber));

    alert("Your number + 100 is equal to " + plus100(parsedNumber));

    alert("The number is " + negativeOrPositive(parsedNumber));
}

 */



// if (userNumber % 2 === 0) {
//     alert("Your number is even.");
//  } else {
//      alert("Your number is odd.");
//  }
//
// var plus100 = userNumber
//
// alert("Your number + 100 is " + plus100 + ".");



/* ########################################################################## */

// /**
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined below, if the color passed is not
//  * one of the ones defined below, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */


function analyzeColor(colors) {
    if (colors === 'blue') {
        return "Blue is the color of the sky."
    } else if (colors === 'red') {
        return "Strawberries are red."
    } else if (colors === 'cyan') {
        return "I don't know anything about cyan."
    } else {
        return "I do not have that color in my list."
    }
}

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('purple'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */


console.log("Will be a different color every time:" + analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch (randomColor) {
    case "red":
        console.log("Fire trucks are red.");
        break;
    case "orange":
        console.log("Oranges are yummy.");
        break;
    case "yellow":
        console.log("The color of the sun... not really.");
        break;
    case "green":
        console.log("Green like grass.");
        break;
    case "blue":
        console.log("Blue, blue, all is glue!");
        break;
    case "indigo":
        console.log("Indigo, just like your jeans.");
        break;
    case "violet":
        console.log("Violet reminds me- happy Ostara!");
        break;
    default:
        console.log("Are you sure that's a color?");
}


// /**
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */

//
// var userColor = prompt("Give me a color, please.");
// // alert(analyzeColor(userColor));


/* ########################################################################## */

// /**
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

var discountAmount;

function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 0 :
            discountAmount = 0;
            break;
        case 1 :
            discountAmount = 0.1;
            break;
        case 2 :
            discountAmount = 0.25;
            break;
        case 3 :
            discountAmount = 0.35;
            break;
        case 4 :
            discountAmount = 0.5;
            break;
        case 5 :
            discountAmount = 1;
            break;
    }

    return totalAmount - (discountAmount * totalAmount);
}

console.log(calculateTotal(1, 100));
console.log(calculateTotal(3, 90));
console.log(calculateTotal(5, 1000));






/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

var userBill = prompt("What was your total bill?");

alert("Your lucky number is " + luckyNumber + ", which means your final bill will be $"
    + calculateTotal(luckyNumber, userBill));




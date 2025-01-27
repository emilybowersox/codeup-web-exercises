(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */


    var names = ['Victoria', 'Kara', 'Emily', 'Nikole'];
    console.log(names);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

   console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */


    names.forEach(function(item) {
        console.log(item);
        });
    // element, index, array

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */



    function first (anArray) {
        return anArray[0];
    }

    var numbers = [1, 2, 3, 4, 5];
    var result = first(numbers);
    console.log('a test' , result === numbers [0]);
    console.log('first test' , result === 1);
    //this is an example ^ of TDD



    function second (anArray) {
        return anArray[1];
    }

    result = second(numbers);
    console.log('a test' , result === numbers [1]);
    console.log('first test' , result === 2);
    // ^TDD again!


    function last (anArray) {
        return anArray[anArray.length-1];
    }

    console.log(last(numbers));

})();

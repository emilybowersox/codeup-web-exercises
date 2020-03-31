(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Emily",
        lastName: "Bowersox"
    };

    //another way to add- you can intialize the object with nothing in it (empty braces)
    // person.firstname = "Emily";
    // person.lastname = "Bowersox";

    console.log(typeof person);
    console.log(person);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    console.log(person.sayHello());




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //an array of objects- cause brackets means an array, and brackets are objects
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

        //calling it aShopper but could be any element, x, y, etc,
        //shoppers in the list- the fuction goes through one shopper
    shoppers.forEach(function (aShopper) {
        if (aShopper.amount > 200) {
            console.log(aShopper.name + "'s total is " + aShopper.amount * 0.88);
        } else {
            console.log(aShopper.name + "'s total is " + aShopper.amount);
        }
    });


    //the above works!
    //but what is below was always undefined
    // for (var shoppers = 0; shoppers < 3; shoppers++) {
    //     if (this.amount >= 200) {
    //         console.log(this.amount * 0.88);
    //     } else {
    //         console.log(this.amount);
    //     }
    // }





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "The Count of Monte Cristo",
            author: {
                firstName: "Alexandre",
                lastName: "Dumas"
            }
        },
        {
            title: "East of Eden",
            author: {
                firstName: "John",
                lastName: "Steinbeck"
            }
        },
        {
            title: "My Body in Clothes",
            author: {
                firstName: "Emily",
                lastName: "Bowersox"
            }
        },
        {
            title: "The Bible",
            author: {
                firstName: "assorted",
                lastName: "assorted"
            }
        },
        {
            title: "Animal Farm",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        }
    ];

    console.log(books[2].title);
    console.log(books[2].author.firstName);
    console.log(books[2].author.lastName);





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.push(createBook("The Lion Witch and Wardrobe", "C.S. Lewis"));
    books.push(createBook("Bon Appetit", "Editors"));


    //you're declaring the parameters in the function, in this case: aBook and index
    books.forEach(function (aBook, index) {
        console.log("Book # " + (index + 1) +  " Title: " + aBook.title + " Author: " + aBook.author.firstName + " " + aBook.author.lastName);
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(aTitle, authorName) {
        var names = authorName.split(" ");
        return {title: aTitle,
                author: {
                    firstName: names[0],
                    lastName: names[1]
                }
        };
    }


    //console.log(createBook("Harry Potter", "JK Rowling"));

})();

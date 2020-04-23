"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//FILTER
//Use .filter to create an array of user objects where each user
// object has at least 3 languages in the languages array.

var threeLanguages = [];
// var languages = users.languages
for (var i = 0; i < users.length; i++){
    if (users[i].languages.length >= 3){
        threeLanguages.push(users[i]);
    }
}
console.log(threeLanguages);
//had to add [i] after users to get it to work- because it's iterating through each user
//good!

var filterLanguages = [];


filterLanguages = users.filter(function (user) {
    return user.languages.length >= 3;
});
console.log(filterLanguages);
//good!

//now es6 formatting:
var anotherFilterLanguages = [];
anotherFilterLanguages = users.filter(user => user.languages.length >= 3);
console.log(anotherFilterLanguages);


//MAP
//Use .map to create an array of strings where each element is a user's email address
var emailAddress = [];
emailAddress = users.map(function (user) {
    return user.email;
});
console.log(emailAddress);

//es6 syntax
var moreEmailAddresses = [];
moreEmailAddresses = users.map(user => user.email);
console.log(moreEmailAddresses);


//REDUCE
//Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.

var totalYearsExperience = 0;
totalYearsExperience = users.reduce(function (total, aUser) {
    return total + aUser.yearsOfExperience;
}, 0);
console.log(totalYearsExperience);

//es6
var moreTotalYearsExperience = 0;
//use 0 to initialize a number, '' for strings, {} for objects, [] for arrays.
moreTotalYearsExperience = users.reduce((total, aUser) => {
    return total + aUser.yearsOfExperience;
}, 0);
//do you have to use 'return' for .reduce?
console.log(moreTotalYearsExperience);
console.log(users.length);

console.log(moreTotalYearsExperience/users.length);
//?? how to put the average in a function??...



// //Use .reduce to get the longest email from the list of users.

var longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest
    }
}, '');
console.log(longestEmail)
//.reduce(accumlation, currentElement)-- the Accumulator and
// the Current are the parameters for reduce
//so this function is saying, if the current user email we're
//currently going over is longer than the length of everything we've
//seen so far that return it, else, return the one with the longest
//length of everything we've seen so far





//Use .reduce to get the list of user's names in a single string.
var everyone = users.reduce((names, user) => {
    return names + ', ' + user.name;
}, ' ');
console.log(everyone);
//gotta specify the inital value for the accumulation (either 0 for
//numbers or ' ' empty string for strings


// Example: Your instructors are: ryan, luis, zach, fernando, justin.
//
var instructors = " ",
    instructors = users.reduce((allInstructors, currentInstructor) => {
        return allInstructors + ', ' + currentInstructor.name;
    }, " ");
console.log(instructors);
//got it almost- remember accumlator and the currentElement params
//both need to be represented in the return!!!!





//Use .reduce to get the unique list of languages from the list of users.
const allLanguages = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        if(!languages.includes(language)) {
            //if you don't already have the language, add it here
            languages.push(language)
        }
    });
    return languages;
}, []);
console.log(allLanguages);



//there's another example of map/filter/reduce with promises in the
//map-filter-reduce-lec.js codeup file
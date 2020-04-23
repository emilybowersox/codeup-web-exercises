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


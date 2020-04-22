

let gitHubToken = "456e6e275fe7db0bd4899fe710e9dc01adc8cf43";
// fetch(url, {headers: {'Authorization': gitHubToken}});


//Create a function that accepts a GitHub username,
// and returns a promise that resolves with the date of the last
// commit that user made.
// Reference the github api documentation to achieve this.

//
// GET /users/:username/events
// //if there's a :username it means you need to put in a specific username
//
// GET /users/emilybowersox/events
//
// function (gitHubUserName) {
//
//     return dateOfLastCommit
// }

fetch('https://api.github.com/users/emilybowersox/events',{headers: {'Authorization' : gitHubToken}})
    .then(response => console.log(response))
    .catch(error => console.error(error));





// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));
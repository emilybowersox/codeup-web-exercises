


var userNumber = 0;

do {
    userNumber = Number(prompt('Please enter a number between 1 and 50.'));
    if (userNumber < 1 || userNumber > 50) {
        alert(userNumber + " is not between 1 and 50.")
    } else if (userNumber % 2 === 0) {
        alert(userNumber + " is not odd.");
    } else if (isNaN(userNumber)) {
        alert(userNumber + ' is not a number.')
        // but now is lists 'userNumber' as NaN in the console...
    } else {
        alert('Yay you entered a valid number.')
        console.log(userNumber);
        break;
    }
} while (true);

console.log('number to skip is: ' + userNumber);

for(var i = 1; i <= 50; i +=2) {
    if(i === userNumber) {
        console.log('Yikes: skipping number ' + userNumber);
        continue;
    }
    console.log('Here is a an odd number: ' + i);
}







// for () {
//     prompt('Please enter an odd number between 1 and 50.');
//     if (i % 2 !== 0 && i >= 1 && i <= 50) {
//         console.log(i + " is a valid number.")
//     } else {
//         console.log('That was not an odd number; please try again.');
//         break;
//     }
// }





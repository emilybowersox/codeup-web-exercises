console.log('hello');


"use strict";

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });

var input = '';
var key = '38384040373937396665';

function konamiCode(cb) {
    console.log('on code');
    // document.addEventListener('keydown', function (e) {
    $(document).keyup(function(e){
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}
// ^'e' stands for event, but really could but anything in here
// -standing for function 'event'

konamiCode(function () {
    console.log('Happy Easter');
    alert('You have added 700 lives');
    $('h1').css('color', 'blue', 'background-color', 'red');
    $('h1').css('background-color', 'red');
});


//https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html











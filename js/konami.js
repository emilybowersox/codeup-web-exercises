console.log('hello');


"use strict";

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });


function onKonamiCode(cb) {
    console.log('on code')
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode(function () {alert('You did it!')})


//https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html











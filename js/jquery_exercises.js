"use strict";

// $(document).ready(function () {
//     alert('The DOM has finished loading');
// });
//
// //"$" references the JQuery object
// //accessing "documnet" object
// //event listener/method "ready"
// //passing and anonymous function (function()) into the event listener "ready"..
// //..which will execute the code when the document is ready for JS manipulation
// //the code which is executed in the "alert"
//
//
// var listContents = $('#list').html();
// alert(listContents);
//or
// alert($('#list').html());
//
//
//  $('.codeup').css('border', 'solid red 1px');


// $('li').css('font-size', '20px');
//
// $('h1, p, li').css('background-color', 'grey');
// //not working below
// // $('*').css('font-family', 'sans-serif Arial Ubuntu');
//
// var h1Content = $('h1').html();
// alert(h1Content);
//
//
// //.html() will grab the first of that element referenced
// //but .text() will grab all of it within the multiple of the element


$(document).ready(function () {
    console.log('i am ready to go!');
//the functions inside this (below) are ready once the document has finished loading

$('h1').click(function () {
    $('h1').css('background-color', 'green')
});



$('p').dblclick(function () {
    $('p').css('font-size', '35px')
});



$('li').hover(
    function () {
        $('li').css('color', 'red')
}, function () {
        $('li').css('color', 'black')
    }
);


});
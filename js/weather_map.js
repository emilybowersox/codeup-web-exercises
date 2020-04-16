"use strict";

$(document).ready(function () {

weatherMapToken;
//name of my API key



    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: weatherMapToken,
        q:     "Dallas, US",
        units: "imperial"
    }).done(function (data) {
        console.log('current weather', data);
    });


    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherMapToken,
        q:     "Dallas, US",
        units: "imperial"
    }).done(function (data) {
        console.log('forecast', data);
    });


























});
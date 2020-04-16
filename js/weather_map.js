"use strict";

$(document).ready(function () {

weatherMapToken;
//name of my API key



    function renderHTML(weatherArray){
        var HTML = "";

        weatherArray.forEach(function (weatherData) {
            HTML = "<tr>" +
                "         <td>"+weatherData.name+"</td>" +
                "         <td>"+weatherData.main.temp+"</td>" +
                "         <td>"+weatherData.main.temp_max+"</td>" +
                "         <td>"+weatherData.id+"</td>" +
                "      </tr>";
            $("#insertWeather").append(HTML);
        });

    }
    //
    // function getInfo(){
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: weatherMapToken,
            q:     "Dallas, US",
            units: "imperial"
        }).done(function(data){
            renderHTML(data);
        }).fail(function(error){
            console.error(error);
        });
    // }




    //
    // $.get("http://api.openweathermap.org/data/2.5/weather", {
    //     APPID: weatherMapToken,
    //     q:     "Dallas, US",
    //     units: "imperial"
    // }).done(function (data) {
    //     console.log('current weather', data);
    // });





    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: weatherMapToken,
    //     q:     "Dallas, US",
    //     units: "imperial"
    // }).done(function (data) {
    //     console.log('forecast', data);
    // });


























});
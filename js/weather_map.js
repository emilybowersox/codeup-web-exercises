"use strict";

$(document).ready(function () {

weatherMapToken;
//name of my API key

    var url = "/http://api.openweathermap.org/data/2.5/weather";
    //do we need slashes before or after?



    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: weatherMapToken,
        q:     "Dallas, US",
        units: "imperial"
    }).done(function (data) {
        console.log('current weather', data);
        $('#insertWeather').empty();
        renderHTML();
    }).fail(function (error){
        console.error(error);
    });

    // getInfo();

    function renderHTML(weatherArray){
        var HTML = "";
        // $("#insertProducts").empty(); // clean up your structure

        weatherArray.forEach(function(tool){
            HTML = "<ul>" +
                "            <li>"+data.main.temp+"</li>" +
                "            <li>"+data.weather.description+"</li>" +
                "            <li>"+data.main.humidity+"</li>" +
                "            <li>"+data.main.pressure+"</li>" +
                "        </ul>";
            $("#insertWeather").append(HTML);
        });

    }

   //  function getInfo(){
   //      $.get(url, {
   //                  APPID: weatherMapToken,
   //                  q:     "Dallas, US",
   //                  units: "imperial"
   //              }).done(function (data){
   //          renderHTML(data);
   //      }).fail(function (error){
   //          console.error(error);
   //      });
   //  }
   //
   // getInfo();



    // function renderHTML(weatherArray){
    //     var HTML = "";
    //
    //     weatherArray.forEach(function (weatherData) {
    //         HTML = "<tr>" +
    //             "         <td>"+weatherData.name+"</td>" +
    //             "         <td>"+weatherData.main.temp+"</td>" +
    //             "         <td>"+weatherData.main.temp_max+"</td>" +
    //             "         <td>"+weatherData.id+"</td>" +
    //             "      </tr>";
    //         $("#insertWeather").append(HTML);
    //     });
    //
    // }
    // //
    // // function getInfo(){
    //     $.get("http://api.openweathermap.org/data/2.5/weather", {
    //         APPID: weatherMapToken,
    //         q:     "Dallas, US",
    //         units: "imperial"
    //     }).done(function(data){
    //         renderHTML(data);
    //     }).fail(function(error){
    //         console.error(error);
    //     });
    // // }
    //
    //













    // $.get("http://api.openweathermap.org/data/2.5/forecast", {
    //     APPID: weatherMapToken,
    //     q:     "Dallas, US",
    //     units: "imperial"
    // }).done(function (data) {
    //     console.log('forecast', data);
    // });








///MAPBOX

    mapboxgl.accessToken = mapBoxToken;


// Basic Map
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-82.999496, 39.984153],
        zoom: 14
    });




    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function (data) {
                return data.features[0].center;
            });
    };


// function placeMarkerAndPopup () {
    geocode("Fox in the Snow", mapBoxToken).then(function (result) {
        console.log('Result is ' + result);
        var popupFox = new mapboxgl.Popup()
            .setHTML("<h3>Fox in the Snow</h3>")
        var markerFox = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map)
            .setPopup(popupFox);
        popupFox.addTo(map);
    });










});
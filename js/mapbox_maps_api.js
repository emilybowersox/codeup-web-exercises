
mapboxgl.accessToken = mapBoxToken;


// Basic Map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-82.999496, 39.984153],
    zoom: 14
});


//how do you make markers work with geocode maps? i think the problem is that the "var map" is
//buried within the function for the geocode

//how do you use this to make the popup clickable??
// var el = document.createElement('div');
// el.id = 'marker';

// function placeMarkerAndPopup () {
    geocode("Fox in the Snow", mapBoxToken).then(function (result) {
        console.log('Result is ' + result);
        var popupFox = new mapboxgl.Popup()
            .setHTML("<h3>Fox in the Snow</h3>")
        var markerFox = new mapboxgl.Marker()
            .setLngLat([-82.999496, 39.984153])
            .addTo(map)
            .setPopup(popupFox);
        popupFox.addTo(map);
        });
// }
//
// placeMarkerAndPopup();

// var markerOptions = {
//     color: "#c8a2c8",
// };
//
// var markerFox = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-82.999496, 39.984153])
//     .addTo(map)


// var popupFox = new mapboxgl.Popup()
//     .setHTML("<h3>Fox in the Snow</h3>")
//     .addTo(map)

// markerFox.setPopup(popupFox);
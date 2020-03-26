(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = [];

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsString);

    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    //console.log(planetsString);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var brPlanets = planetsArray.join("<br>");
    // console.log(brPlanets);
    document.write(brPlanets);


    //see  codeup git hub for answer
    // you have to concatenate 3 parts! beginning, middle part
    //  planetsUL += planetsArray.join("</li><li>");
    //  += adds the new thing while preserving the old thing too





    // var planetStringList = planetsArray.join("<ul><li>")
    // var planetStringList = "<ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>";
    // console.log(planetStringList);
    //






})();


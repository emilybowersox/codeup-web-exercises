
//While loops

var i = 2;

while (i <= 65536) {
    console.log('Multiply by 2 each preceding number: ' + i);
    i *= 2;
}



//ice cream cones problem
//Not done!!!!
var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold = Math.floor(Math.random() * 5) + 1;
var conesLeft = allCones - conesSold;

do {
    if (conesLeft > conesSold) {
        console.log(conesSold + ' cones sold.');
    }
    else if ((conesSold > conesLeft) && (conesLeft > 0)) {
        console.log('I cannot sell you ' + conesSold + 'I only have ' + conesLeft + ' cones left.');
    }
    else {
        console.log('Yay I sold all the cones.');
    }
    // while (conesLeft > 0);
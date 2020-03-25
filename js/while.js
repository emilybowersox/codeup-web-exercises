
//While loops

var i = 2;

while (i <= 65536) {
    console.log('Multiply by 2 each preceding number: ' + i);
    i *= 2;
}



//ice cream cones problem
//conditionals inside of loops
//It works!

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesToPurchase = Math.floor(Math.random() * 5) + 1;

    if (conesToPurchase <= allCones) {
        console.log(conesToPurchase + ' cones sold.');
        // conesToPurchase = conesToPurchase - allCones;
        allCones -= conesToPurchase;
    } else {
        console.log('I cannot sell you ' + conesToPurchase + ', I only have '
        + allCones + ' left.')
    }
    console.log(allCones);
} while (allCones > 0);
    console.log('Sold them all!')


// previous try
// do {
//     if (conesLeft > conesSold) {
//         console.log(conesSold + ' cones sold.');
//     }
//     else if ((conesSold > conesLeft) && (conesLeft > 0)) {
//         console.log('I cannot sell you ' + conesSold + 'I only have ' + conesLeft + ' cones left.');
//     }
//     else {
//         console.log('Yay I sold all the cones.');
//     }
//     // while (conesLeft > 0);
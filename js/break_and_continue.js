



for (i = 1, i <= 50; i++) {
    prompt('Please enter an odd number between 1 and 50.');
    if (i % 2 !==0) {
    console.log(i + " is a valid number.")
} else {
    console.log('That was not an odd number; please try again.');
    break;
}
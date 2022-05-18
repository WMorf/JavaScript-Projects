//Global Variable
var longString = "This is quite a long string, seriously..."; // String to be used for string.length property


console.log(longString.length); //prints string length to console for step 198

function Call_Loop() {
    var place = ""; //blank spot loop will update
    var X  = 1;
    while (X < 11) { //loop within the function runs until conditions are met
        place += "<br>" + X;
        X++; //increments so loop will run again unless x is greater than 11
    }
    document.getElementById("loop").innerHTML = place;
}
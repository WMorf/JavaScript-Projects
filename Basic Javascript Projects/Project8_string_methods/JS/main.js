//uses concat method to combine strings
function FullSentence() {
    var part_1 = "I have "
    var part_2 = "made this "
    var part_3 = "into a complete "
    var part_4 = "sentence."
    var wholeSentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = wholeSentence;
    document.getElementById("buttontext").innerHTML = "Done!"; //changes button text after printing sentence
}

//uses slice method to pull specific parts of the string
function SliceMethod() {
    var sentence = "C'mon you apes! You wanna live forever?"
    var section = sentence.slice(16,30); //slices sentence from character position 16 - 30
    document.getElementById("slice").innerHTML = section; //prints "You wanna live"
}

//uses toUpperCase method
function UpperCase() {
    var text = document.getElementById("uppercase").innerHTML; //gets text from element
    console.log(text); //checking to make sure text was stored properly
    var upperText = text.toUpperCase(); //Makes UpperCase
    document.getElementById("uppercase").innerHTML = upperText; //Displays modified Text
}

function CowSearch() {
    var text = document.getElementById("tosearch").innerHTML; //gets text from element
    var searchResults = text.search("cow");
    document.getElementById("searchresult").innerHTML = searchResults; //ZDiisplays position of first occurrence
}
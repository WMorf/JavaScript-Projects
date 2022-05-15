var globalVar = "This is a global variable." //Global variable

function thisIsLocal() {
    var localVar = "THis is a local variable" //Local variable
}

function iAmError() { //Funtion designed to cause error in console
    var iWork = "This variable works"
    console.log(iWork);
    console.log(localVar); //causes error. Not a local variable
}

//writes message if local time is before time stated
function getDate() {
    if (new Date().getHours() < 12) {
        document.getElementById("hello").innerHTML = "Smiley day to ya";
    }
}

//custom if statement

X = 10

function IfOnly() { //only works if value X exceeds 10
    if (X == 11) {
        document.getElementById("ifonly").innerHTML = "Good Job!";
    }
}

function AddToX() { //Adds 1 to X, allowing IfOnly to run
    X++;
    document.getElementById('valuex').innerHTML = "Value of X = 11";
    console.log(X)
}
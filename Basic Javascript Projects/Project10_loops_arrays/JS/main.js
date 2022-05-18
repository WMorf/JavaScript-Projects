//Global Variable
var longString = "This is quite a long string, seriously..."; // String to be used for string.length property

console.log(longString.length); //prints string length to console for step 198

let blockScope = 42; //This can't stays within blockscope when put between curly brackets

console.log(blockScope); //for step 215

// while loop for step 197
function Call_Loop() {
    var place = ""; //blank spot loop will update
    var X  = 1;
    while (X < 11) { //loop within the function runs until conditions are met
        place += "<br>" + X;
        X++; //increments so loop will run again unless x is greater than 11
    }
    document.getElementById("loop").innerHTML = place;
}

// for loop for step 201

var Dragons = ["Gold", "Copper", "Bronze", "Steel", "Blue", "Red", "White"] //array
var Content = ""
var Y;

function ThisForLoop() {
    for (Y = 0; Y < Dragons.length; Y++) { //runs through the array executing code each time and then incrementing Y
        Content += Dragons[Y] + "<br>"; //current index of array plus line break
    }
    document.getElementById("forloop").innerHTML = Content;
}

// function using getElementbyID for step 205

function ArrayFunction() {

    var GoblinTypes = []; //creates array
    GoblinTypes[0] = "Goblin";
    GoblinTypes[1] = "HobGoblin";
    GoblinTypes[2] = "Bugbear";
    GoblinTypes[3] = "Snotling";

    document.getElementById("array").innerHTML = "The third type of goblin is " + GoblinTypes[2] + ".";
}

// function using constant keyword for step 213

function ConstantFunction() {
    const Health_Potions = {type:"small", color:"red", power:"2d4+2"}; //declares constant
    Health_Potions.color = "blue"; //changes property
    Health_Potions.price = "50gp" //adds property and value
    document.getElementById("constant").innerHTML = "The " + Health_Potions.type +
    " Health Potion is " + Health_Potions.color + " and costs: " + Health_Potions.price;
}
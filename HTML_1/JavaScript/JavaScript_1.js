

// Switch function for step 225
function MonsterFunction() {
    var monsterOutput; //varirable to be printed
    var monsters = document.getElementById("monster").value;
    var monsterStringA = " are pretty scary"; //plural
    var monsterStringB = " is pretty scary"; //singular

    switch(monsters) {

        case "Vampires":
            monsterOutput = "Vampires" + monsterStringA;
            break;
        
         case "Werewolfs":
            monsterOutput = "Werewolfs" + monsterStringA;
            break;

        case "Frankenstein":
            monsterOutput = "Frankenstein" + monsterStringB;
            break;

        case "Clowns":
            monsterOutput = "Clowns" + monsterStringA;
            break;

        case "Swamp Thing":
            monsterOutput = "Swamp Thing" + monsterStringB;
            break;

        case "Aliens":
            monsterOutput = "Aliens" + monsterStringA;
            break;
        
        default: //run if any other input
            monsterOutput = 'Please enter a monster exactly as written on the above list'
    }

    document.getElementById("output").innerHTML = monsterOutput;

}

// uses getElementByClassName() for step 236

function ClassMethod() {
    var X = document.getElementsByClassName("test");
    X[0].innerHTML = "See, it worked!";
}
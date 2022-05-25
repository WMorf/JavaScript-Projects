
//----------------------------Challenges-----------------------------------//
function displayChallenges() {

    //Dictionary Object
    var besties = {name: 'Sauruman', location: 'Isengard', robeColor: 'White'};
    // convert JS object to string for step 413
    var JSONstring = JSON.stringify(besties);
    document.getElementById("thisJSON").innerHTML = JSONstring;

    //JSON string object
    var frenemy = '{"name": "Gandalf", "location": "Around", "robeColor": "Grey"}';
    // convert JSON strings to JS object for step 415
    var JSONstring2 = JSON.parse(frenemy);
    document.getElementById("thecoolerJSON").innerHTML = JSONstring2.name + " the " + 
    JSONstring2.robeColor;

    //set key/value to be saved locally in browser for step 417
    localStorage.setItem("General", "Witch King");
    //Use the key to return it's value
    document.getElementById("bob").innerHTML = localStorage.getItem("General");
}
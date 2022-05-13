function getDictionary() { //prints value specified from dictionary
    var Monster = {
        Species:"Banshee",
        Color:"Light Blue",
        Breed:"Undead",
        Age:100,
        Sound: "Wail",
    }
    document.getElementById("Dictionary").innerHTML = Monster.Age;
}

function getDictionary2() {
    var Monster = {
        Species:"Grick",
        Color:"Green",
        Breed:"Slug",
        Age:5, //Value will be deleted
        Sound: "Slosh",
    }
    delete Monster.Age; //Deletes value
    document.getElementById("Dictionary2").innerHTML = Monster.Age; //returns "undefined"
}
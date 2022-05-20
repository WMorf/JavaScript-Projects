
//Turn Tracker
let activePlayer = 'X';
//Array of moves, helps determine win condition
let selectedSquares = [];

//displays activePlayer
document.getElementById('activePlayer').innerHTML = activePlayer + "'s Turn";

//place x or o on square
function placeXOrO(squareNumber) {

    //some method used to check array to ensure a square hasn't been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        
        //retrieves html element that was clicked
        let select = document.getElementById(squareNumber);

        //displays activePlayer
        document.getElementById('activePlayer').innerHTML = activePlayer;

        //checks player turn
        if (activePlayer === 'X') { //if active player = X, x.png is placed
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")'; //places o if X is not activePlayer
        }

        //concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);

        //checkWinConditions();

        //changes activePlayer
        if (activePlayer === 'X') {

            activePlayer = 'O';
            document.getElementById('activePlayer').innerHTML = activePlayer + "'s Turn";

        } else {

            activePlayer = 'X';
            document.getElementById('activePlayer').innerHTML = activePlayer + "'s Turn";

        }

        //plays placement sound
        audio('./media/place.mp3');

        if(activePlayer === 'O') {

            disableClick()

        }
    }
}
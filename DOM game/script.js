//restart the game button
var restart = document.querySelector("#b");
//Grabs all the squares
var squares = document.querySelectorAll('td');

//clear all the squares
function clearboard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}

restart.addEventListener('click', clearboard);
//check the square number


function changeMarker() {
    if (this.textContent == -'') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker)
}
//for loop to add events listeners to all the squares
/*(alert("hey hey hey!!!"));
console.log("Look at me....we are working together!");*/

var hobbiesList = document.getElementById("hobby list");
console.log(hobbiesList);

var hobbyL = document.getElementsByClassName("hobby");
console.log(hobbyL); //an array - starts at 0,1, 2, etc

var hobbyL = document.getElementsByClassName("hobby");
console.log(hobbyL[1].innerHTML); 
console.log(hobbyL[0].innerHTML);


var musicList = document.getElementById("music list");
console.log(musicList);

var musicL = document.getElementsByClassName("music");
console.log(musicL[2].innerHTML);
console.log(musicL[1].innerHTML);
console.log(musicL[0].innerHTML);

function favoriteSong() {
	document.getElementById("favorite").innerHTML = "Freebird!!!";
}

favoriteSong();

function favoriteSong() {
	document.getElementById("favorite").innerHTML = "Freebird!!!";
}

favoriteSong();

function worstSong() {
	document.getElementById("worst".innerHTML) = "Country Songs";
}

worstSong();



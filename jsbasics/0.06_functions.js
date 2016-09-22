
//Declaration
function helloWorld(){
	console.log("Hello World");
}

//call the function
helloWorld();


function printmyname(){
	console.log("Amanda R");
}

printmyname();

//scope

var name = function(){
	console.log("Manda");
}

name();

function addNumbers(){
	var x = 10;
	var y = 10;
	console.log(x + y);
}

addNumbers();


function mNumbers (){
	var x = 10;
	var y = 10;
	console.log(x * y);
}

mNumbers();

///Parameters & Arguments
function randoNumber(x){
	console.log("the number you entered was: " + x);
}
randoNumber(6);

function bankpindigit(x){
	var pin = 562;
	
	if (pin != x) {
		console.log("pin not accepted");
	} else {
		console.log("correct");
	}
}

bankpindigit(567);

function numAdd(a, b) {
	return a + b;
}

console.log(numAdd(1,2));



//challenge

//bronze
//write a function with two strings as arguments.
//the function should concatentate the string.

function combineWords (wordOne, wordTwo){
	return wordOne + wordTwo;
};
console.log(combineWords("Diet", "Coke"));


//silver
//write a function that will help me easily calculate monthly bills.
function bills(rent, water, electric, trash, wireless) {
	var totalBills = rent + water + electric + trash + wireless;
	return totalBills;
}

console.log("Bills:", bills(600, 30, 30, 10, 30));

//example for multiple people
var paulBills = bills(400, 30, 30, 10, 30);
var jamesBills = bills(600, 30, 30, 10, 30);
console.log("James Bills: " + jamesBills);
console.log("Paul Bills: " + paulBills);

//Gold
//write a function that helps me calculate the cost of my buying 100 sodas at $.99 each(or whatever and however many I feel like buying)
//Figure in the tax there, too. The tax is 7 percent in Indiana.
//Return a message that says something like this:
//"100 Cokes will cost you $105.93.
function calculatePrice(quantity, price, item, tax) {
	var totalTax = quantity * price * tax;
	var totalPrice = quantity * price + totalTax;
	return quantity + " " + " will cost you $" + totalPrice.toFixed(2);
}

console.log(calculatePrice(132, .88, "Cups of Coffee", 1.07));












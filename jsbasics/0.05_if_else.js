var elevatorUp = true;
var elevatorBroken = true;
var elevatorDown = false;
var elevatorStop = true;

if (elevatorUp === true) {
	console.log("going up");
} else {
	console.log("the elevator is broken or going down");
}

if (elevatorBroken === false) {
	console.log("so broken");
} else {
	console.log("the elevator is so broken")
}

if (elevatorStop === true) {
	console.log("stop");
} else {
	console.log("the elevator stopped")
}



if (elevatorUp === true && elevatorBroken === false) {
	console.log("elevator is in moving state please wait")
} else {
	console.log("elevator is on its way");
}

if (elevatorDown || elevatorUp) {
	console.log("please keep your legs and arms inside the elevator");
} else {
	console.log("you reached your destination");
}


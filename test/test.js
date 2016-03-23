require("../random.js");

function printHelloWorld(d) {

	var args = ["H","E","L","L","O"," ","W","O","R","L","D"];

	Math.seed(d); //instancing the seed.

	var name = '';

	for(var index = 0; index < args.length; index++) {
		var cindex = Math.rand(0, args.length-2);
		//console.log("random index choosen: "+cindex+" size of array: "+args.length);
		name += args[cindex];
	}
	return name;
}

//returns in " OLHEOOOOWL"
for(var i = 0; i < 15; i++) {
	console.log(printHelloWorld(123));
}
//returns in "WLWLEOE OWO"
for(var i = 0; i < 15; i++) {
	console.log(printHelloWorld(321));
}

//conclusion not fully safe yet because the seed is short

//testing with longer seed...
//result in LLOLLHELEEO, it seems to take the over hand of 2 4 6 8 10 12 etc... 64 can be divided by 2 aswell.
console.log("longer seed: "+321+0.12345*1000);
for(var i = 0; i < 15; i++) {
	console.log(printHelloWorld(321+0.12345*1000));
}
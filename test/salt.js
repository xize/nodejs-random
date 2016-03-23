require("../random.js");

function salt(password, bits) {
	var array = toByteArray(password);
	//make seed
	var seed = makeSeed(array);
	//instancing seed in the generator
	Math.seed(seed);
	//shuffle once
	array = shuffle(array);
	//add random psuodo bytes
	array = addBytes(array, bits);
	//shuffle one more time
	array = shuffle(array);
	//creating final salt
	var salt = '';
	for(var i = 0;  i < array.length; i++) {
		salt += String.fromCharCode(array[i]);
	}
	return salt;
}

function makeSeed(array) {
	var a = '';
	for(var i = 0; i < array.length; i++) {
		a += array[i];
	}
	return parseInt(a);
}

function shuffle(array) {
	var newarray = [];
	for(var i = 0; i < array.length; i++) {
		newarray[i] = array[Math.rand(0, array.length-1)];
	}
	return newarray;
}

function addBytes(array, bits) {
	var newarray = [];
	for(var i = 0; i < bits; i++) {
		newarray[i] = Math.rand(1, 127); //generate with between 1 and 127 for UTF-8 compatability (length of 128)
	}
	for(var i = 0; i < array.length; i++) {
		newarray.push(array[i]);
	}
	return newarray;
}

function toByteArray(d) {
	var bytes = [];
	for(var i = 0; i < d.length; i++) {
		bytes[i] = d.charCodeAt(i);
	}
	return bytes;
}

/*
generates( seems to be non utf-8 though :( ):
g[V%{&a)_
:N oa2z%Y{j;&LILg]jCY}7y=({%wC} "}"q^LSVEDj%I<^q
                                                                     [0^#P"j
<ET;^.^4T.
4vACd[DKgdFu^%20yX{X
^_yFibvS.tKM"u
}PE;{^2qiDX@z]%KVFqg;vY@%27"<{
*VqU
     D
oTu7t(]j(<[%%([FinY[%vq72jE{&A
                                     1UsC;oAoM"CD=g<%h
 */
console.log(salt("hello", 256));
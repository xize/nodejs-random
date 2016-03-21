var seedNR = 0.4709848078964569;
var use = 1;

/**
 * randomizes a number based on the seed from the generator
 */
Math.rand = function(from, to) {
	if(use > to && use < from) {
		use = 1;
	}
	//TODO: figuring out why it says & 0xFF is unexpected since it just seem to work....
	var gen2 = (seedNR * use) * 0xFF - ((to+from)*0xFF) & 0xFF;
	use++;
	return gen2;
};

/**
 * initialize a seed for the random generator
 */
Math.seed = function(s) {
	s = Math.sin(s+1) * 1000;
	seedNR = (parseFloat(s - Math.floor(s)));
};

/**
 * @deprecated
 */
Math.reset = function() {
	//TODO: remove this function if the current generator works
	use = 1;
};

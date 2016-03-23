var seedNR = 40000;
var seed = 40000;
var use = 0;

Math.seed = function(seed) {
	if(seed <= 0) {
		seed =  Date.now();
	}
	seedNR = seed;
	seed = seed;
};

Math.nextInt = function() {
	//this is xorshift.
	seedNR ^= (seedNR << 21);
	seedNR ^= (seedNR >>> 35);
	seedNR ^= (seedNR << 4);
	//returns the generated number, however use bitwise modifier to remove negative numbers then generate between 0 and 127
	return (seedNR < 0 ? ~(seedNR) : seedNR) % (127+1-1)+1;
};

Math.rand = function(min, max) {
	if(min > max) {
		return Math.rand(max, min);
	}
	if(min === max) {
		return min;
	}
	var result = (Math.nextInt() % (max + 1 - min)) + min; 
	return result;
};

Math.reset = function() {
	//resets the seed.
	Math.seed(seed);
};
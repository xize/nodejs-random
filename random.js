var seedNR = 0.4709848078964569;
var use = 1.2531;

Math.rand = function(from, to) {
	if(use > to) {
		use = 1.2531;
	}
	var gen2 = (seedNR * use) * 0xFF - ((to+from)*0xFF) & 0xFF;
	use++;
	return gen2;
};

Math.seed = function(s) {
	s = Math.sin(s+1) * 1000;
	seedNR = (parseFloat(s - Math.floor(s)));
};

Math.reset = function() {
	use = 1.2531;
};

var seedNR = 0.4709848078964569;
var use = 1.2531;

function random(from, to) {
	if(use > to) {
		use = 1.2531;
	}
	var gen2 = (seedNR * use) * 0xFF - ((to+from)*0xFF) & 0xFF;
	use++;
	console.log(gen2);
}

/**
 * @author xize
 * @param s - the seed
 * @returns float
 */
function seed(s) {
	s = Math.sin(s+1) * 1000;
	seedNR = (parseFloat(s - Math.floor(s)));
}

seed(1);
random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);

random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);

random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);
random(0, 12);
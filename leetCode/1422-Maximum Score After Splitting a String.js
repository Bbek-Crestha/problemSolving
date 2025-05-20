var maxScore = function (s) {
	let maxCount = 0;
	for (i = 1; i < s.length; i++) {
		a = s.substring(i, -1);
		b = s.substring(i);

		sum =
			a.split('').filter((x) => x === '0').length +
			b.split('').filter((x) => x === '1').length;
		if (sum > maxCount) {
			maxCount = sum;
		}
	}

	return maxCount;
};

let cases = ['011101', '00111', '1111'];
for (c = 0; c < cases.length; c++) {
	console.log('nums = ' + cases[c]);
	console.log('result = ' + maxScore(cases[c]));
}

var prefixCount = function (words, pref) {
	let count = 0;
	for (i = 0; i < words.length; i++) {
		if (
			pref.length <= words[i].length &&
			pref === words[i].substring(0, pref.length)
		) {
			count++;
		}
	}
	return count;
};

let cases = [
	[['pay', 'attention', 'practice', 'attend'], 'at'],
	[['leetcode', 'win', 'loops', 'success'], 'code'],
];
for (c = 0; c < cases.length; c++) {
	console.log('case = ' + cases[c]);
	console.log('result = ' + prefixCount(cases[c][0], cases[c][1]));
}

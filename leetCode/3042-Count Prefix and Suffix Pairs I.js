var countPrefixSuffixPairs = function (words) {
	let count = 0;
	for (i = 0; i < words.length; i++) {
		for (j = 1; j < words.length; j++) {
			if (i < j && words[i].length <= words[j].length) {
				if (
					words[i] === words[j].substring(0, words[i].length) &&
					words[i] === words[j].substring(words[j].length - words[i].length)
				) {
					count++;
				}
			}
		}
	}
	return count;
};

let cases = [
	['abc', 'abcdooobabc'],
	['abab', 'ab'],
	['a', 'aba', 'ababa', 'aa'],
	['pa', 'papa', 'ma', 'mama'],
	['bb', 'bb'],
];
for (c = 0; c < cases.length; c++) {
	console.log('case = ' + cases[c]);
	console.log('result = ' + countPrefixSuffixPairs(cases[c]));
}

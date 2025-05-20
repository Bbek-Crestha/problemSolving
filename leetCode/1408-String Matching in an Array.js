var stringMatching = function (words) {
	var wordArr = [];
	for (i = 0; i < words.length; i++) {
		for (j = 0; j < words.length; j++) {
			if (words[i].length < words[j].length) {
				if (words[j].includes(words[i])) {
					wordArr.push(words[i]);
					break;
				}
			}
		}
	}

	return wordArr;
};

console.log(['leetcode', 'et', 'code']);
console.log(stringMatching(['leetcode', 'et', 'code']));

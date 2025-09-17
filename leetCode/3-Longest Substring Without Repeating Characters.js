var lengthOfLongestSubstring = function (s) {
	let x = 0;
	let str = '';

	for (i = 0; i < s.length; i++) {
		if (!str.includes(s[i])) {
			str += s[i];
		} else {
			x = Math.max(str.length, x);
			str = str.substring(str.indexOf(s[i]) + 1, i) + s[i];
		}
	}

	return Math.max(x, str.length);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));

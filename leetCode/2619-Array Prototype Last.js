Array.prototype.last = function () {
	return this.length > 0 ? this[this.length - 1] : -1;
};

let cases = [[3, 3, 7], [3, 3, 3], [null, {}, 3], []];
for (i = 0; i < cases.length; i++) {
	console.log('case = ' + cases[i]);
	console.log('result = ' + cases[i].last());
}

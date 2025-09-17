var reduce = function (nums, fn, init) {
	let val = 0;
	if (nums.length > 0) {
		val = fn(init, nums[0]);
		for (i = 1; i < nums.length; i++) {
			val = fn(val, nums[i]);
		}
		return val;
	} else {
		return init;
	}
};

let cases = [
	[
		[1, 2, 3, 4],
		function sum(accum, curr) {
			return accum + curr;
		},
		0,
	],
	[
		[1, 2, 3, 4],
		function sum(accum, curr) {
			return accum + curr * curr;
		},
		100,
	],
	[
		[],
		function sum(accum, curr) {
			return 0;
		},
		25,
	],
];

for (i = 0; i < cases.length; i++) {
	console.log('1');
	console.log('case = ' + cases[i]);
	console.log('result = ' + reduce(cases[i][0], cases[i][1], cases[i][2]));
}

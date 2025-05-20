var triangleType = function (nums) {
	if (
		nums[0] + nums[1] <= nums[2] ||
		nums[1] + nums[2] <= nums[0] ||
		nums[0] + nums[2] <= nums[1]
	)
		return 'none';
	if (nums[0] === nums[1] && nums[0] === nums[2]) return 'equilateral';
	else if (nums[0] === nums[1] || nums[1] === nums[2] || nums[2] === nums[0])
		return 'isosceles';
	else return 'scalene';
};

let cases = [
	[3, 3, 7],
	[3, 3, 3],
	[3, 4, 5],
	[3, 3, 5],
];
for (i = 0; i < cases.length; i++) {
	console.log('nums = ' + cases[i]);
	console.log('result = ' + triangleType(cases[i]));
}

async function sleep(millis) {
	return new Promise((res) => setTimeout(res, millis));
}

let cases = [100, 200, 300];
for (i = 0; i < cases.length; i++) {
	console.log('case = ' + cases[i]);
	console.log('result = ' + sleep(cases[i]));
}

function f() {
	var pi = 3.141;
	function getPi() {
		return pi;
	}
	return getPi;
}

var p = f();
console.log(p());
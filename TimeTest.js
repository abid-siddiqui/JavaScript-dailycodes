a = [1,2,3,4,5,6,7];

function doSomething() {
	for (var x=0; x < a.length; x++)
		console.log(a[x]*a[x])
}

function doSomethingFast() {
	a.forEach(function(x) { 
		console.log(x*x); });
}

function doSomethingFaster() {
	a.map(function(x) {
		console.log(x*x); 
	});
}


console.time("Do Something");
doSomething();
console.timeEnd("Do Something"); 

console.time("Do SomethingFast");
doSomethingFast();
console.timeEnd("Do SomethingFast"); 

console.time("Do Something Faster");
doSomethingFaster();
console.timeEnd("Do Something Faster"); 
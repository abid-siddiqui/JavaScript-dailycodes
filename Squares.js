
var x = [ 1,2,3,4,5,6,7];
var x2 = [];
var y, y_end;

var interations = 1000000;
console.time("For loop");
for(var i = 0; i < x.length; i++)
{
	console.log(x[i]*x[i]);
}	
console.timeEnd("For loop");
//y_end = performance.now();


console.time("Foreach loop");
x.forEach(function (a) {
	console.log(a*a);
});
console.timeEnd("Foreach loop");

console.time("Map loop");
x.map(function (a) {
	console.log(a*a);
});
console.timeEnd("Map loop");

//var y_end = performance.now();

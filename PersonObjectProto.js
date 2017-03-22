function Person(first, last, age, eyeColor, nationality)  {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyeColor;
	this.nationality = nationality;
	this.name = function() {
		return this.firstName + " " + this.lastName;  }
}

var myFather = new Person("James", "Mellon",70, "Brown", "English");
var myMother = new Person("Diane", "Mellon",70, "Brown", "German");

console.log(myFather.name());
console.log("is " + myFather.nationality);
var test = ("a" == false)? "true": "false";
console.log("Test result is " + test);
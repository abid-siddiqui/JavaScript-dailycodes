var myJSON = '{ "fname": "Andy", "lname": "Mellon", "age": 46, "city":"Jackson", "state": "NJ" }';
var myObj = JSON.parse(myJSON);
console.log(myObj.fname + " " + myObj.lname + " is from " + myObj.city + ", " + myObj.state) ;
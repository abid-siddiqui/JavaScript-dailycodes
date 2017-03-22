
var myObj, myJSON, text, obj;
//Storing data:
myObj = '{ "fname": "Andy", "lname": "Mellon", "age": 46, "city":"Jackson", "state": "NJ" }';
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

//Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
console.log(obj.fname + " " + obj.lname);
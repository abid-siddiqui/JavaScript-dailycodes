function abc() { console.log("Hello World")}();


function Point(x_pt,y_pt,z_pt,name) {
	this.x  = x_pt;
	this.y = y_pt;
	this.z = z_pt;
	this.pt_name = name;
    this.dist = function(input) {
    	var x1 = this.x - input.x;
    	var y1 = this.y - input.y;
    	var z1 = this.z - input.z;
    	return x1 + y1 + z1;
    }
}

var myOrigin = new Point(0,0,0,"origin");
var my2ndPt = new Point(10,20,10,"2nd Pt");
console.log("the distance between pts is " +myOrigin.dist(my2ndPt));
abc();

//ES5 OOPs using function style 
function Employee() {
	this.id =100;
	this.name="Ravi";
	this.display= function() {
		console.log("employee class function");
		console.log("id is "+this.id);
		console.log("name is "+this.name);
	}
}
var emp1 = new Employee();
emp1.display();

//ES6 OOPs using class style
class Person {
	id = 100;
	name="Ravi";
	display() {
		console.log("display function");
		console.log("id is "+this.id);
		console.log("name is "+this.name);
	}
}
let p1 = new Person();
p1.display();  

let p2 = new Person();
p2.display();  



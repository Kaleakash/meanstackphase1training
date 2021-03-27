class Employee {
	/*constructor(id,name) {
		this.id = id;
		this.name = name;
	}*/
	constructor(id=123,name,age=18) {
		console.log("object created");
		this.id = id;
		this.name = name;
		this.age=age;
	}	
	display() {
		console.log("id is "+this.id);
		console.log("name is "+this.name);
		console.log("age is "+this.age);
	}
}
let emp1 = new Employee(100,"Ravi",21);
emp1.display();
let emp2 = new Employee(101,"Ramesh",23);
emp2.display();
let emp3 = new Employee(102,"Lokesh");
emp3.display();
let emp4 = new Employee(103);
emp4.display();
let emp5 = new Employee();
emp5.display();


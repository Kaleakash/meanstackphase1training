class Employee {		//super class 
	constructor(id,name,salary) {		
		console.log("employee object created");
		this.id = id;
		this.name = name;
		this.salary = salary;
	}	
	dis1() {
		console.log("employee dis1() function");		
		console.log("id is "+this.id);
		console.log("name is "+this.name);
		console.log("salary is "+this.salary);
	}
}
class Manager  extends Employee {		//sub class 
	constructor(id,name,salary,numberOfEmp) {
		super(id,name,salary);	// calling super class constructor with 3 parameter to set the value. 
		console.log("manager object created");
		this.numberOfEmp = numberOfEmp;
	}
	dis2() {
		console.log("Manager dis2() functions");
		console.log("Number of emp is "+this.numberOfEmp);
	}
}
let mgr1 = new Manager(100,"Ravi",45000,25);
mgr1.dis1();
mgr1.dis2();
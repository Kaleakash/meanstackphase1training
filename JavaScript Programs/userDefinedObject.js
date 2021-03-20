//ES5 style 
/*function Employee() {   //pascal naming rules. 
        this.name="Ravi";   // this is keyword
        this.age = 21;

        this.displayEmpImpInfo = function() {
                document.write("<br/>Name is "+this.name);
                document.write("<br/>Age is "+this.age)   
        }
}
//Employee();
var emp1 = new Employee();
emp1.displayEmpImpInfo();
document.write("<br> Accessing property outside function style class")
document.write("<br>Name is "+emp1.name)
document.write("<br>Age is "+emp1.age)

var emp2 = new Employee();
emp2.displayEmpImpInfo();
document.write("<br> Accessing property outside function style class")
document.write("<br>Name is "+emp2.name)
document.write("<br>Age is "+emp2.age)
emp2.name="Ramesh";
emp2.age = 23;
document.write("<br>Afer change name and age of emp2 objet ")
document.write("<br>Name is "+emp2.name)
document.write("<br>Age is "+emp2.age)
document.write("<br> Accessing property outside function style class")
document.write("<br>Name is "+emp1.name)
document.write("<br>Age is "+emp1.age)
*/

// Parameterized user-defined objects 
/*
function Employee(name,age) {   //pascal naming rules. 
    this.name=name;   // this is keyword
    this.age = age;

    this.displayEmpImpInfo = function() {
            document.write("<br/>Name is "+this.name);
            document.write("<br/>Age is "+this.age)   
    }
}
var emp1 = new Employee("Ajay",23);
var emp2 = new Employee("Balaji",25);
emp1.displayEmpImpInfo();
emp2.displayEmpImpInfo();
*/

// Adding run type property as well as functionality to user-defined object 
/*function Employee(name,age) {   //pascal naming rules. 
    this.name=name;   // this is keyword
    this.age = age;

    this.displayEmpImpInfo = function() {
            document.write("<br/>Name is "+this.name);
            document.write("<br/>Age is "+this.age)   
    }
}
var emp1 = new Employee("Ajay",23);
var emp2 = new Employee("Balaji",25);
emp1.displayEmpImpInfo();
emp2.displayEmpImpInfo();
Employee.prototype.desg="Tester";
document.write("<Br/>After added property as desg")
document.write("<br> Emp1 desg property "+emp1.desg);
document.write("<br/> Emp2 desg property "+emp2.desg);
Employee.prototype.changeDesg = function(desg){
    this.desg = desg;
}
emp1.changeDesg("Developer");
emp2.changeDesg("Manager");
document.write("<br> Emp1 desg property "+emp1.desg);
document.write("<br/> Emp2 desg property "+emp2.desg);
*/
//ES5 style inheritance 
//It is use to inherits property and behavour of old class 
//function style into new class function style. 
function Employee(name,age) {   //pascal naming rules. 
    this.name=name;   // this is keyword
    this.age = age;
    this.displayEmpImpInfo = function() {
            document.write("<br/>Name is "+this.name);
            document.write("<br/>Age is "+this.age)   
    }
}
function Manager(name,age,numberOfEmp){
        Employee.call(this,name,age); //pass name and age 
        this.numberOfEmp= numberOfEmp;
        this.displayMgrInfo= function() {
            document.write("<br/>Number of employee working under him "+this.numberOfEmp)
        }
}
//1st way
//var emp1 = new Employee("Ravi",21);
//emp1.displayEmpImpInfo();
//Manager.prototype= Object.create(emp1);
//Manager.prototype=Object.create(new Employee("Ramesh",24));
//Manager.prototype=Employee;
//var mgr1 = new Manager(12);
//mgr1.displayEmpImpInfo();
//mgr1.displayMgrInfo();
//mgr1.name="Lokesh";
//mgr1.displayEmpImpInfo();

//2nd way 
var mgr1 = new Manager("Ravi",21,5);
mgr1.displayEmpImpInfo();
mgr1.displayMgrInfo();


//Rest Operator ...variableName : 0, 1 and many
// in one function we can use only one rest operator ist must be last parameter in function. 
function empInfo(id,name,salary,...skillSet) {
	console.log("Id is "+id);
	console.log("Name is "+name);
	console.log("Salary is "+salary);
	console.log("SkillSet is "+skillSet);
	console.log("SkillSet size "+skillSet.length);
}
let skill=["HTML","CSS","JavaScript","Angular"]
empInfo(100,"Raj",12000);
empInfo(101,"Ravi",13000,"C");
empInfo(102,"Ramesh",14000,"C","C++","Java");
empInfo(103,"Ajay",18000,...skill);	//spread operator which is use to pass array value to rest operator. 

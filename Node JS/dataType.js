var a=10;		//int a=10;		int a=20;	
a=40;		// re-assign 
var a="Ravi";	// re-declare 
let b=50;
b ="Ajay";
//let b="Ramesh";		Error 
/*
function info(name) {
	if(name=="Ajay") {
	let msg = "Welcome "+name;
	}else {
	let msg ="Welcome unknown"
	}
	return msg;		// undefined msg;
}
console.log(info("Vikash"));
*/
for(var i=0;i<10000;i++){}
console.log(i);
for(let j=0;j<10000;j++){}
console.log(j);
const abc=100;	// to declare constant variavble like final in Java. 
//abc=200;				
//alert("external js file executed...")
/*function info(){
    alert("welcome to user - defined function");
}
info();
function add(a,b){
    var sum = a+b;
    alert("Sum of two number is "+sum);
}
add(100,200);
add(1,2);
add(10,20);
add(10.10,20.20);
add("Ravi","Kumar");
function sayHello(name){
    return "Welcome to user defined function "+name;
}
*/
function addNumber(a,b){
    //alert("called...");
    var length = addNumber.arguments.length;
    alert("Number of arguments "+length);
    var sum =0;
    for(var i=0;i<length;i++){
        sum = sum +addNumber.arguments[i];
    }
    alert("sum is "+sum);
}
addNumber(10,20);
addNumber(10);
addNumber();



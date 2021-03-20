// user-defined callback.
/*function sayHello(fname,callback){
        return "Welcome "+callback(fname);
}
var maleInfo = function(name){
    return "Mr "+name;
}
var femaleInfo = function(name){
    return "Miss "+name;
}

document.write(sayHello("Ravi",maleInfo));
document.write("<br/>")
document.write(sayHello("Seeta",femaleInfo));
document.write("<br/>")
document.write(sayHello("Ajay",function(name){
    return "Mr "+name;
}));
*/
//
//creating array using ES5 style 
var num=[10,20,30,40,50,60];
document.write(num);
document.write("<br/>")
for(var i=0;i<num.length;i++){
    document.write("<br/> "+i)
}
var dis = function(n){
    document.write("<br/>VAlue is "+n);
}
document.write("<br/>Using for each function with expression style function ")
num.forEach(dis);

document.write("<br/>Using for each function with anoymous function")
num.forEach(function(n){
    document.write("<br> Value is "+n);
})
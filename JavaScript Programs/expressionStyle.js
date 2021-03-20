//Normal style function 
function add(a,b){
    var sum = a+b;
    document.write("Sum "+sum)
}
add(100,200);
//Expression style function with name 
var sumOfNumber = function addNumber(a,b){
    var sum = a+b;
    document.write("<br/>sum of two number is "+sum);
}
sumOfNumber(100,200);

//Expression style function with no name 
var sumOfAnotherNumber = function(a,b){
    var sum = a+b;
    document.write("<br/>sum of two number is "+sum);
}
sumOfAnotherNumber(100,200);

//IIFE Immediately Invoked Function Expression. 
(function(){
    document.write("<br/>This is empty IIFE function style")
})();

(function(a,b){
    var sum = a+b;
    document.write("<br/>sum is "+sum);
})(100,200);


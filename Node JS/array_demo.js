/*let num1=[100,200,300,400,500,600]; //literal style. 
let num2=new Array();           //creating 0 size memory 
let num3 = new Array(100,200,300,400,500); //creating more than one value with memory.
console.log(num1.length)
console.log(num2.length)
console.log(num3.length)
num1.push(700);     // add at last or top 
num1.push(800);
console.log(num1)
num1.unshift(1);        //add at begining 
num1.unshift(2);
console.log(num1)
num1.pop();     //remove last elements 
num1.shift();   //remove from begining elements. 
console.log(num1);
num1.splice(1,1);   //remove using index position 1st paramter index position and 2nd number of values  
console.log(num1);
let indexPostion = num1.indexOf(300);   // first find the index 
console.log(indexPostion);
num1.splice(indexPostion,1);
console.log(num1);*/
/*let num1 = [1,2,3,4];
let num2 = [100,200,300];
console.log(num1);
console.log(num2);
num1.push(...num2);
console.log(num1);*/
let num1 = [10,20,30,40];
console.log("Using in loop")
for(let i in num1){     //it give index position 
    console.log(i+" "+num1[i]);
}
console.log("using of loop")        // it give value 
for(let n of num1){
    console.log(n);
}
console.log("using forEach function")
num1.forEach(v=>console.log(v));
//num1.map(v=>v+100).forEach(v=>console.log(v));  //map we use in React 
//num1.forEach(v=>console.log(v+100)); 
//num1.filter(v=>v%2!=0).forEach(v=>console.log(v));




let m1 = new Map();
m1.set(1,"Ravi");
m1.set(2,"Ramesh");
m1.set(3,"Rajesh");
m1.set(4,"Lokesh");
console.log(m1);
m1.set(1,"Ajay");   //if same key present then value replace by default 
m1.set(5,"Ramesh");
console.log(m1);
console.log(m1.size)
console.log(m1.has(3));
console.log(m1.has(6));
console.log(m1.get(1)); //usign key get the value 
console.log(m1.get(7))  //using key get the value. 
m1.delete(2);       //using key we can we can delete key-value 
console.log(m1);    
if(!m1.has(10)){
        console.log("set the value")
}
//retrieve keys 
console.log("only key using key values.")
for(let key of m1.keys()){
    console.log("keys "+key+" Value is "+m1.get(key));
}
//retrieve keys 
console.log("only value")
for(let val of m1.values()){
    console.log("value "+val);
}
//retrieve using forEach 
console.log("using for eachFunction")
m1.forEach((v,k)=>console.log(v+" "+k))



var s1 = new Set();
s1.add(10);
s1.add(20);
s1.add(30);
s1.add(40);
console.log(s1);
s1.add(10); // we can't add duplicate 
console.log(s1);
console.log(s1.size);
console.log(s1.has(10));
console.log(s1.has(100));
s1.delete(20);  // delete using values. 
console.log(s1)
console.log("Retrieve using forEach function")
s1.forEach(v=>console.log(v))
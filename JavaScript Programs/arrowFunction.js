var dis1 = function() {
    document.write("this is epxression style function...");
}
dis1();

var dis2 = ()=>document.write("<br/>This is arrow function style");
dis2();

var sum = function(a,b){
            return a+b;
}
document.write("<br/>Sum of two number is using expression style "+sum(100,200))

// arrow function by default return without return keyword. 
var add = (a,b)=>a+b;
document.write("<br/> sum of two number is using arrow function "+add(1,2));

var largest1 = function(a,b){
    if(a>b){
        return a;
    }else {
        return b;
    }
}
document.write("<br> Largest of two number is "+largest1(5,4));

var largest2 = (a,b)=> {
    if(a>b){
        return a;
    }else {
        return b;
    }
}
document.write("<br> largest of two number is "+largest2(5,4));

// Arrow function doesn't define its own execution context where 
//normal function defined own execution context. 
document.write("<br/>execution context")
function Employee() {
    var id = 100;           //it is like a private 
    this.name = "Ravi";     // it is like a public 
    this.dis1 = function() {    //public 
        document.write("<br/>This is public function");
        document.write("<br/>Id is "+id);
        document.write("<br/> Name is "+this.name);
    }
    var that = this;
    var dis2 = function() {     //private 
        document.write("<br/> This is private function")
        document.write("<br> Id is .."+id);
        document.write("<br> Name is..... "+that.name)
    }
    var dis3 = ()=>{
        document.write("<br/> This is private arrow function")
        document.write("<br> Id is .."+id);
        document.write("<br> Name is..... "+this.name)
    }
    dis2();
    dis3();
}

var emp1 = new Employee();
document.write("<br> Id is "+emp1.id);
document.write("<br> Name is "+emp1.name);
emp1.dis1();


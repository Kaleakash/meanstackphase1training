/*document.write("1st statement");
document.write("<br/>2nd statement");
document.write("<br/>3rd statement");*/


document.write("1st statement");

setTimeout(function(){
    //document.write("This is Asychronouse code")
    document.getElementById("info").innerHTML="This is Asychronouse code"
},2000);
var i=0;
setInterval(function(){
    document.getElementById("data").innerHTML="Hi, Value of i is "+i;
    if(i%2==0){
       // document.bgColor="Red";
       document.getElementById("imageId").src="gmail.jpg";
       document.getElementsByTagName("p")[0].style.color="Red";
    }else {
        //document.bgColor="Green";
        document.getElementById("imageId").src="google.png";
        document.getElementsByTagName("p")[0].style.color="Green";
    }
    i++;
},1000);

document.write("<br/>3rd statement");
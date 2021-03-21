/*alert("Welcome to BOM Hierarchy")
window.alert("Welcoem to BOM Hierarchy");
var fname = prompt("Enter the name")
var lname = window.prompt("Enter the name")
alert("Name is "+fname);
window.alert("Name is "+lname);*/
var myWind;
function openPage() {
myWind = window.open("home.html","","width=500px,height=300px,left=500px,top=300px");
//var myWin = window.open("abc","","width=500px,height=300px,left=500px,top=300px");
//myWin.document.write("This is my window");
}
function closePage() {
    myWind.close();    
}
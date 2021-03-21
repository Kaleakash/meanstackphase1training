var obj;
function fun() {
   /* var accno = document.getElementById("accid").value;
    obj = new XMLHttpRequest();
    alert("object loaded...")
    obj.open("Get","URL?key="+accno);
    obj.onreadystatechange=callback;
    obj.send();*/
}
function loadObject() {
    obj = new XMLHttpRequest();
    alert("object loaded...")
    obj.open("Get","demo.txt");
    obj.onreadystatechange=callback;
    obj.send();
}
//obj.readState 
//0 : not initialize 
//1 : ready to send the request to page 
//2 : send 
//3 : processing 
//4 : ready to give response 
// 100 : information 
// 200 : Success 
// 300 : redirection from one page to another page 
// 400 :Client side error 
// 500: server side error 

function callback() {
        alert(obj.readyState);
       if(obj.readyState==4 && obj.status==200){
           alert(obj.responseText)
       }
}
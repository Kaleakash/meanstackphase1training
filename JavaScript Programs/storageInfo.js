function addData() {
    var a=10;
    sessionStorage.setItem("obj",a); 
    console.log("Record stored in session")   
}
function getData() {
    console.log("VAlue is "+sessionStorage.getItem("obj"));
}

function addDataLocal() {
    var a=10;
    localStorage.setItem("obj",a); 
    console.log("Record stored in local storage")   
}
function getDataLocal() {
    console.log("VAlue is "+localStorage.getItem("obj"));
}
/*var obj = new Promise((resolve,reject)=> {

})*/
// Server code 
/*var obj = new Promise(function(resolve,reject){
    //resolve("successfully done the task"),
    reject("Failure becuase some reason")
});
// it return success or failure.

// Then and catch take callback function as a parameter 
//then will execute if promise resolve successfully 
// else catch execute if promise reject.
obj.
then(data=>document.write("In Then "+data)).
catch(error=>document.write("In Error "+error));
*/
function loadData(){
    //var main = document.getElementById("main");

fetch("https://jsonplaceholder.typicode.com/todos").
then(data=>data.json()).//then(data=>data.json()) 
then(result=> {
    //var info = result.map(obj=>obj.id+"<br\>");
    //main.innerHTML=info;
    for(var i=0;i<result.length;i++){
    //main.innerHTML= result[i].id;
    document.getElementById("main").append(result[i].id+"\n");
    //document.append(result[i].id+"<br/>")
    }
}).catch(e=>console.log("In Catch "+e))

}
function add() {
    var title= document.getElementById("title").value;
    
    console.log(title);
    for(var i=0;i<10;i++){
    var pNode = document.createElement("p");//create p tag 
    pNode.setAttribute("class","abc");  // add attribute for p tag 
    var pText = document.createTextNode(title);   //create text 
    pNode.appendChild(pText);       // add text to p tag 


    document.getElementById("main").appendChild(pNode); // add p to main tag 
    }

}
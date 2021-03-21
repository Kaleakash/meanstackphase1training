var stringData = `{"id":100,"name":"Ravi","skillSet":["Java","Angular","Python"],
"address":{"city":"Bangalore","State":"Kar"}}`;
document.write("data in string format<br/>");
document.write(stringData)
document.write("<br/>")
document.write("<br/>id is "+stringData.id)
document.write("<br/>name is "+stringData.name)
//convert string to json 
var jsonData = JSON.parse(stringData);
document.write("<br/>After converted ")
document.write("<br/>Id is "+jsonData.id);
document.write("<br/>Name is "+jsonData.name);
document.write("<br/> Technology Name is "+jsonData.skillSet[2])
document.write("<br/> City is "+jsonData.address.city)
// convert json to string 
var stringDataInfo = JSON.stringify(jsonData);
document.write("<br/>After converted ")
document.write("<br/>Id is "+stringDataInfo.id);

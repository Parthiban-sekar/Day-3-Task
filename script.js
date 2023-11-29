//Q1 Compare two JSON :-

let obj1 ={
    name: "person 1",
    age: 5
};

let obj2 ={
    age: 5,
    name: "person 2"
};

if (JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log("The values are Equal");
}
else{
    console.log("The values are not Equal");
}

// Q2 Display all the country flags :-

const request = new XMLHttpRequest(); 
request.open("get","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
   for (let i=0; i<result.length; i++){
    console.log(result[i].flags.png);
   } 
}

// Q3 Display country names,regions,sub-region and population :- 

const request1 = new XMLHttpRequest(); 
request1.open("get","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    var result1 = JSON.parse(data1);
   for (let i=0; i<result1.length; i++){
    console.log("Name:",result1[i].name.common, ";", "Region:",result1[i].region, ";", "Sub-Region:",result1[i].subregion, ";", "Population:",result1[i].population,);
   } 
}
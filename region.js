console.log("Function display_country() to display Country name, Region, Subregion, Population");
var request = new XMLHttpRequest();
var method = 'GET';
var api = "https://restcountries.com/v3.1/all";
request.open(method,api);
request.send();
function display_country(){
    var data = request.response; 
     var obj = JSON.parse(data); 
     console.log("COUNTRY NAMES ", '-'.repeat(5), "REGION",'-'.repeat(5), "SUB-REGION",'-'.repeat(5),"POPULATION");
     console.log('='.repeat(120));
     for(let i of obj){
        console.log( i["name"]["common"].toUpperCase(), '-'.repeat(5), i["region"], '-'.repeat(5), i["subregion"], 
                    '-'.repeat(5), i["population"]);
    } 
}
//     //OUTPUT : (task4 Q3 output image attached in repository)
//     // Function response_check() to display Country name, Region, Subregion, Population
//     // response_check()
//     // script.js:63 COUNTRY NAMES  -------------------- REGION --------------- SUB-REGION --------------- POPULATION
//     // script.js:64 ========================================================================================================================
//     // script.js:66 SAINT VINCENT AND THE GRENADINES --------------- Americas --------------- Caribbean --------------- 110947
//     // script.js:66 FRENCH GUIANA --------------- Americas --------------- South America --------------- 254541
//     // script.js:66 FAROE ISLANDS --------------- Europe --------------- Northern Europe --------------- 48865
//     // script.js:66 PAKISTAN --------------- Asia --------------- Southern Asia --------------- 220892331
//     // script.js:66 FIJI --------------- Oceania --------------- Melanesia --------------- 896444
//     // script.js:66 MONGOLIA --------------- Asia --------------- Eastern Asia --------------- 3278292

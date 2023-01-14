//Question 2 :  Display all the country flags from REST API
console.log("Function display_flag() to display Country flags");
var request = new XMLHttpRequest();
var method = 'GET'
var api = "https://restcountries.com/v3.1/all"
request.open(method,api);
request.send();
function display_flag(){
    var data = request.response;
     var obj = JSON.parse(data); 
     console.log("COUNTRY NAMES ", '-'.repeat(10), "FLAGS");
     console.log('#'.repeat(50));
     for(let i of obj){
        console.log( i["name"]["common"], '='.repeat(10), i["flags"]["png"]);
     } 
    }
    // // Function response_check() to display Country flags
// // index.html:40 Live reload enabled.
// // response_check()
// // script.js:11 COUNTRY NAMES  ------------------------------ FLAGS
// // script.js:12 ======================================================================
// // script.js:14 SAINT VINCENT AND THE GRENADINES -------------------- https://flagcdn.com/w320/vc.png
// // script.js:14 FRENCH GUIANA -------------------- https://flagcdn.com/w320/gf.png
// // script.js:14 FAROE ISLANDS -------------------- https://flagcdn.com/w320/fo.png
// // script.js:14 PAKISTAN -------------------- https://flagcdn.com/w320/pk.png
// // script.js:14 FIJI -------------------- https://flagcdn.com/w320/fj.png
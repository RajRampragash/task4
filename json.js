let obj1 = {name : "person 1",age: 5};
let obj2 = {age:5, name : "person1"};
let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);
let flag = -1;
if (keys1.length === keys2.length){
    for(i=0; i<keys1.length; i++){
        if(!keys2.includes(keys1[i])){
            flag = false;
            break;

        }
    }
}
else
flag=false;
if(flag)
console.log("same properties");
else
console.log("not same properties");
// output :same properties

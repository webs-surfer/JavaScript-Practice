// -------------------------------------- BASICS ----------------------------------------------
// // let var and const
// const address = "Delhi";
// let value = 10;
// var valse = 15;
// console.log([address,value,valse]);

// undefined and null
// console.log(typeof(undefined)); //undefined
// console.log(typeof(null)); //object

// --------------------------------------- TYPE CONVERSIONS ------------------------------------
// let value = "62"
// console.log(typeof(value));
// let newValue = Number(value)
// console.log(typeof(newValue)); 

// console.log(3+2) //5 numbers 
// console.log("3"+2) //32 string 
// console.log(2+"3") //23 string
// console.log("2"+1+1) //211 string 
// console.log(1+2+"3") //33 first add the number and then add with the string and assume it as a string

// --------------------------------- string manipulation --------------------------------------

// let name = "rohan";
// let Class = 2;
// console.log(`hello my name is ${name} and i study in class ${Class}`);

// let name = "rohan";
// console.log(name.length);

// another way of declaring string
// const name = new String("name");
// console.log(name.toUpperCase()); //upper case
// console.log(name.charAt(2)); //index char
// console.log(name.indexOf('m')); //index no. on char
// const newName = name.substring(0,3); //new substring
// console.log(newName);
// const anotherName = new String("    NAME    ");
// console.log(anotherName); 
// console.log(anotherName.trim()); //trim spaces
// const url = "https://rohan.com/rohan%10adhikari";
// console.log(url.replace('%10','-'));

// ------------------------------------- NUMBERS --------------------------------------------
// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString()); // number to string
// console.log(balance.toFixed(2)); //numbers after decimal
// const othernumber = 23.910;
// console.log(othernumber.toPrecision(2)); //gives number to be precise in string form 
// const hundreds = 10000000;
// console.log(hundreds.toLocaleString()); //add , according to the international number system
// console.log(hundreds.toLocaleString('en-IN')); //according to the indian number system

// ------------------------------------------ MATHS ------------------------------------------

// console.log(Math);
// console.log(Math.abs(-5)); //gives absolute value of a number
// console.log(Math.round(29.3945)); //round of a number 
// console.log(Math.floor(23.123)); //give floor number
// console.log(Math.ceil(234.232)); //give ceil number
// console.log(Math.random()); //give random number between 0-1
// console.log(Math.floor(Math.random()*10)+1);

// between a max and min value
// const min = 20;
// const max = 30;
// console.log(Math.floor(Math.random() * (max-min+1) + min));

// -------------------------------------- ARRAY ----------------------------------------------
// const arr = new Array(1,2,3,4);
// const newarr = [1,2,3,4,5];
// console.log(arr);
// console.log(newarr)
// console.log(newarr[1]);
// console.log(arr[0]);
// const myarr = new Array(1,2,3,4,5);
// myarr.push(6);
// myarr.pop();
// myarr.unshift(9); //add number in the starting of the array
// console.log(myarr);
// myarr.shift();
// console.log(myarr);//shift back to the last arr
// console.log(myarr.indexOf(3));
// const newestarr = myarr.join();
// console.log(typeof newestarr);

// const fruits = ['apple','mango','banana'];
// const vegetables = ['beans', 'potato', 'onion'];
// const busket = [...fruits, ...vegetables]; //joins all the array values
// console.log(busket);

// const newarr = [1,2,3,[1,2,3],[1,2,[1,2,3]]];
// const flatArray =  newarr.flat(Infinity); //flat out all the nested arrays 
// console.log(flatArray);

// console.log(Array.from('Rohan')); //creates array from string
// const score1 = 100;
// const score2 = 200;
// const score3 = 300;

// console.log(Array.of(score1,score2,score3));

// ---------------------------------------- OBJECTS ---------------------------------------
// const mySYMBOL = Symbol("&$");
// const JSUSER = {
//     name : "rohan",
//     [mySYMBOL] : "&$",
//     'age' : 18,
//     location : "jaipur",
//     email : "rohan@google.com",
//     isLoggedIn : false
// }
// console.log(JSUSER.name); //common way
// console.log(JSUSER["age"]); //sometimes when it is not possible to use the common way
// console.log(JSUSER[mySYMBOL])
// console.log(JSUSER);
// const tinderUser = {};
// tinderUser.name = "rohan";
// tinderUser.age = 18;
// console.log(tinderUser);
// console.log(tinderUser.hasOwnProperty('age'));


// const obj1 = {1:'a' , 2:'b'};
// const obj2 = {3:'a' , 4:'b'};
// const obj3 = {5:'a' , 6:'b'};
// const obj4 = Object.assign({},obj1,obj2,obj3);
// const obj5 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

// ---------------------------------- FUNCTIONS ---------------------------------------------
// function sayMyName(username){
//     return`${username} is my name`;
// }
// console.log(sayMyName('ROHAN'));
// function calculatePrice(...num1){
//     return num1;
// }
// console.log(calculatePrice(100,2000,3000,4000));

// -------------------------------------- THIS AND ARROW -------------------------------------
// const user = {
//     username : "rohan",
//     age : 18,
//     welcome : function(){
//         console.log(`${this.username} welcome`)
//     }
// }
// user.welcome();
// user.username =  "sam";
// user.welcome();

// arrow function
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(1,3));

// //explicit
// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// //LINK implicit
// const addThree = (num1,num2,num3) => (num1+num2+num3)
// console.log(addThree(1,2,3));

// const hello = (name) => ({username : 'ROHAN'})
// console.log(hello('rohan'));

//---------------------------------------- for ------------------------------------------------
// for(let i=0; i<20; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// const arr = [1,2,3,4,5,6,7,8];
// for (const element of arr) {
//     console.log(element);
// }
// for (const key in arr) {
//     console.log(key);
//     console.log(arr[key]);
// }
// const map = new Map();
// map.set('IN','INDIA');
// map.set('USA','UNITED STATE OF AMERICA')
// map.set('BR','BRAZIL')
// // console.log(map);
// for (const [element,value] of map) {
//     console.log(`${element} is for ${value}`);
// }

//----------------------------------------- for each ----------------------------------------
// coding = ['c++','c','java','python'];
// coding.forEach(element => {
//     console.log(element);
// });

//------------------------------------------ filter -----------------------------------------
// const mynums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = mynums.filter((num) => num>4)
// console.log(newNums);
 
//----------------------------------------- maps ---------------------------------------------
// const nums = [1,2,3,4,5,6,7,8];
// const newNums = nums.map(num => num+10);
// console.log(newNums);
// const pracNums = nums.map(num => {return num*5}).map(num => num*10).filter(num => num>300)
// console.log(pracNums);

// -------------------------------------------- reduce --------------------------------------------
// const nums = [1,2,3,4,5,6];
// const total = nums.reduce((acc,curr)=> {return acc+curr},0)
// console.log(total);

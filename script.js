// ///1.1
// const  product={
//   title:"Ball pen",
//   rating:4,
//   offer:5,
//   price:270,
// };
// console.log(product);


// ///1.2//
// const profile={
//   fullName:"shraddha khapra",
//   posts:195,
//   isFollow:true,
//   isMessage:true,


// };
// console.log(profile);


// //lecture 2//


// //console.log("hello world");//

// //Arithmetic operation///
// // let a =5;
// // let b=3;
// //  console.log("a =", a, "& b =", b);
// // console.log("a + b =", a + b);
// // console.log("a - b =", a - b);
// // console.log("a * b =", a * b);
// // console.log("a / b =", a / b);
// // console.log("a % b =", a % b);
// // console.log("a ** b =", a ** b);

// //unary operator//
// // let a =5;
// // let b=3;
// //  console.log("a =", a, "& b =", b);


// // a++;
//  //console.log("a=",a);
// //  a=a-1;
// //  console.log("a=",a);

// //  a--;
// //  console.log("a=",a);

// // let a =5;
// // let b=3;
// //  console.log("a =", a, "& b =", b);

// //  console.log("a++=",a++);
// //  console.log("a=",a);

// // console.log("++a=",++a);
// // console.log("a=",a);
// // console.log("a--=",a--);
// // console.log("a=",a);
// // console.log("a--=",a--);
// // console.log("a=",a)

// ///assignment operators
// // let a =5;
// //  let b=3;
// //  a -=4 //a= a-4
// //  console.log("a=",a);


//  //comparison operator
// //  let a =5;//number
// //   let b="5";//string ->number
 
// //   console.log("a!==b",a!==b);

// // let a =5;//number
// // let b=3;

// // console.log("5>3",5>3);

// //logical operators
// // let a =5;
// // let b=3;

// // let conditon1=a<b;
// // let condition2=a===5;
// // console.log("condition1 || condition2=",conditon1 || condition2);

// //conditional statements
// //if statement

// // let age =18;
// // if(age>=18){
// //   console.log("you can vote");
// // }
// // if (age<18){
// //   console.log("you cannot vote");
// // }

// // let mode ="dark";
// // let color;
// // if(mode==="dark"){
// //   color ="black";
// // }
// // if (mode==="light"){
// //   color="white";
// // }
// // console.log(color);

// //if else statement

// let mode ="dark";
// let color;
// if(mode==="dark"){
//   color ="black";
// }else{ (mode==="light")
//   color="white";
// }
// console.log(color);


// let age=18;
// if(age>=19){
//   console.log("vote");
// }else{
//   console.log("you cannnot vote");
// }

// ///odd ya even

// let num =11;
// if(num%2 ===0){
//   console.log("even");
// }else{
//   console.log("odd")
// }

// ///else if
// let mode1 = "dark";
// let color1;

// if(mode1 === "dark") {
//   color1 ="black";
  
// } else if(mode1==="blue"){
//   color1="blue";
// }else if(mode1==="pink"){
//   color1="pink";
// }else{
//   color1="white";
// }
// console.log(color1);

// ///ternary opertaor

// let age1=25;
// let result=age1 >=18 ?"adult":"not adult";
// console.log(result);



// ////assignment 2
// ///q.no1

// let num1 =prompt ("enter a number");

// if (num1 %5===0){
//   console.log(num1,"is multiple of 5");
// }else {
//   console.log(num1,"is not a multiple of 5");
// }

// ////q no. 2


// let  score = 96;
// let grade;

// if(score>=90 && score<=100){
//     grade = "A";
// }else if (score>=70 && score<=89){
//   grade="B";
// }else if (score>=60 && score<=69){
//   grade="C";
// }else if (score=50 && score<=59){
//   grade="D";
// }else if (score >=0 && score<=49){
//   grade="F";
// }

// console.log("according to your score ,your grade was:",grade);



///loops 
// for (let i=1;i<=100;i++){
//   console.log("being faixu");
// }

// console.log("loop has ended");

// let sum = 0;
// let n=7
// for (let i=1; i<=n;i++){
//   sum = sum+i;
// }
// console.log("sum=",sum);
// console.log("loop has ended");

// for (let i=1;i<=5;i++){
//   console.log("i=",i);
// }


///infinte loop

////while loop
// let i =1;
// while(i<=5){
//   console.log("i=",i);
//   i++;
// }

////do while loop


// let i =1;
// do {
//   console.log("i=",i  );
//   i++;
// } while(  i<=10 );


/////for-of loop 

// let str="js";
// let size=0;
// for(let val of str){
//   console.log("val=",val);
//   size++;
// }
// console.log("string size=",size);

///for in loops used only objects


// let student ={
//   name:"rahul kumar",
//   age:21,
//   cgpa:7.5,
//   isPass:true
// };
// for(let key in student ){
//   console.log("key=",key,"value=",student[key]);
// }


 //assignment 3

//  for (let i =0;i<=100;i++){
//  if(i %2===0){
//   console.log("i=",i)
//  }
//  }


///Q2


//  let guessNumber="25";

//   let userNum=prompt("Guess the gamer number:");


//    while(userNum!==guessNumber){
//     userNum=prompt("you entered the wrong number.Guess again:");

//    }
//   console.log("congratulations u entered the right number");

 ///string



// let str ="faizan";
// console.log(str[5]);
// console.log(str.length);


// ///// template literal

// let specialString=`This is template literal ${1 +2}`;
// console.log(  specialString);

////

// let obj={
//   item:"pen",
//   price:10
// };

// let output=`the cost of  ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of", obj.item, "is",obj.price, "rupees");

///methods string

// let str4 ="kya haal hai bhai";

// str4=str4.toLowerCase();
// console.log(str4);




// let str5 ="      kya haal  hai bhai    js"   ; 

// console.log(str5.trim());


// let str6 ="0123456";
// console.log(str6.slice(1,4));


// let strr="hello";
// let str2="world";
// let res=str2.concat(strr);
// console.log(res);


// let strrr="hello";
// console.log(strrr.replace ("h","y"));

// let fullName = prompt("enter the username");
// let username="@" + fullName + fullName.length;
// console.log(username);





////ARRys

// let marks =[23,45,67,89,0,5];
// console.log(marks)
// console.log(marks.length);


// let heroes=["ironman","wanda","thor", "hulk","spiderman","captain","antman"]
// for (let index=0;index<heroes.length;index++){
//   console.log(heroes[index]);
// }

// let cities=["delhi","pune","mumbai","banglore","pune",]
// for (let city of cities){
//   console.log(city.toUpperCase());
// }

// let marks=[85,97,44,37,76,60];
// let sum =0;
// for(let val of marks ){
//   sum =sum + val;
// }
// let avg =sum/marks.length;
// console.log(`avg marks of the class = ${avg} `);

// let items =[250,645,300,900,50]; 
// let i =0;  
// for(let val of items){

//     let offer = val/10;
//     items[i] = items[i] -offer;
//     console.log(`value after offer=${items[i]}`)
//  i++;
// }  

//////

// let company = ["Bloomberg",'mocrosoft',"Google","uber","ibm","Netflix"];

// company.shift();



// let company = ["Bloomberg",'mocrosoft',"Google","uber","ibm","Netflix"];

// company.splice(3,1,"ola");



// let company = ["Bloomberg",'mocrosoft',"Google","uber","ibm","Netflix"];

// company.push("Amazon");




///functioms///



// function myFunction(msg){
//   console.log(msg);


// }
// myFunction("hehheheheh");


// function sum(a,b){
//   console.log(a +b);
// }
// sum(121,328);

// function sum(a,b){
// s = a+b;
// console.log("befere return")
// return s;

      
// }
// let Val =sum (3,4);
// console.log(Val);



////arrow functions


// function sum(a,b){
//   return a+b;
// }

// function mul (a,b){
//   return a*b;
// }

////compact method of functions
// const sum=(a,b)=>{
// console.log(a+b);
// }
// console.log(4 + 5);



// const mul= (a,b)=>{
//    return a*b;
// }


// function countVowels(str){
//   let count=0;

//   for (const  char of str){
//     if(char==="a" || char ==="e"|| char ==="i" ||char ==="o"||char ==="u"){
//       count++;
//     }
//   }
//   return count;
// }
// const counVow=(str)=>{
//   let count=0;

//   for (const  char of str){
//     if(char==="a" || char ==="e"|| char ==="i" ||char ==="o"||char ==="u"){
//       count++;
//     }
//   }
//   return count;
// }


//  let nums =[2,3,4,5,6];
//   let calSquare =(num)=>{
//     console.log(num*num);
//   };
 
  
//  nums.forEach(calSquare);




//  let nums=[67,53,39];
// let newArr=nums.map((val) =>{
//     return val*val;
// });
// console.log(newArr);



// let arr=[1,2,3,4,5,6,7];
// let evenArr=arr.filter((val)=>{

//   return val%2!==0;
// })
// console.log(evenArr);


// let arr=[5,6,3,1,3];
// let output=arr.reduce((prev,curr)=>{
// return prev>curr?prev:curr;
// })
// console.log(output);


// let marks=[97,65,32,49,99,96,86];
// let toppers=marks.filter((val)=>{
//   return val>90;

// })
// console.log(toppers);


// let n=prompt("enter a number")
// let arr=[];
// for(let i=1;i<=n;i++){
//   arr[i-1]=i;

// }
// console.log(arr);
// let sum= arr.reduce((res,curr)=>{
//   return res+curr;

// })
// console.log("sum=",sum);




// console.log(arr);
// let factorial= arr.reduce((res,curr)=>{
//   return res*curr;

// })
// console.log("factorial=",factorial);



///HTML CSS JS
 

//  let button = document.getElementById("myId");
//  console.dir(button);


// let headings =document.getElementsByClassName("myClass") ;  
// console.dir(headings);
// console.log(headings);


// let paras =document.getElementsByTagName("p");
// console.dir(paras);


// let firstElement=document.querySelector("#myId");
// console.dir(firstElement);


// let allElement=document.querySelectorAll(".myClass");
// console.dir(allElement);

// console.dir(document.body.firstChild);

// let h2 =document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText + " from apna clg students";


let divs = document.querySelectorAll(".box");
let idx=1;
for (div of divs){
div.innerText=`new unique value ${idx}`;
idx++;
}




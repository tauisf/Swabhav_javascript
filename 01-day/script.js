// console.log("This is javascript batch");
// alert("Hello ");
// confirm("Are you sure yo want to continue ");
// let val= prompt("Enter ta Number");
// console.log(val);

// let number = 100;
// console.log(typeof number);


// number = 10.00;
// console.log(typeof number);

// number = "Hello";
// console.log(typeof number);

// number = 'h';
// console.log(typeof number);

// number = true ;
// console.log(typeof number);

// var num =  10
// console.log(typeof num);

//-----------------string---------------------------- 


// let fullName = "Mohd Tausif Siddiqui";
// console.log(fullName.toLowerCase());
// console.log(fullName.toUpperCase());

// let result =   fullName.split(" ");
// console.log(result[1]);
// result =   fullName.split("dd");

// console.log(result[0]);
// console.log(result[4]);

// let email = "siddiqui@gmail.com";

// let result =  email.split("@");
// console.log(result[1]);

// result = email.substring(email.indexOf("@")+1);
// console.log(result);

// result = email.slice(email.search("@")+1);
// console.log(result);


// let name ="Elon Musk";
// let netWorth = "200-billion dollars";

// let string = `World Richest Man is ${name} has netWorth of ${netWorth}`;
// console.log(string);


//--------------------Arrays Are Immutable---------------------

// let furits = ["Apple","Banana","WaterMelon","Tomato"];

// console.log(furits.includes("Apple", 0));

// furits.push("JackFruit");
// console.log(furits);
// furits.pop();
// console.log(furits);

// let newFurits =  furits.concat(["Grape", "Melon"]);
// console.log(newFurits)

// newFurits.indexOf("Grape");


//----------------loose and strict comparison----------------------

// let number = 30;
// let string  ="30";

// console.log(number == string );
// console.log(number === string );

//------------Function-------------------

//---Normal function

// function sayHello(){
//     console.log("Hello user ");
    
// }
// sayHello();


// //----Expression Function(Parameters)

// let sayName =function(LastName,FirstName = "John"){
//     console.log(`Hi ${FirstName} ${LastName}`);
    
// } 

// sayName("Dogla");
// //--Single parameter and Single Statement function
// let printNumber=num1=>console.log(num1);
// printNumber(10);

// //-- argument array by javascript not work for arrow Function
// let welcome = function(){
//     console.log(`hi ${arguments[0]} ${arguments[1]}`);
    
// }
// welcome("John" , "Dogla");

// //-------arrow function
// let add = (a, b) => {
//     return a + b;
// };

// console.log(add(2, 3));

// // single statement
// add = (a, b) => a + b;

// console.log(add(2, 3));


//callback function

// case -1

// const func1=()=>{
//     console.log("Inside function 1 ");
    
// } 
// func1();

// const func2 =()=>{
//     console.log("Insude function 2 ");
    
// }
// func2();

// case 2  directly calling the function in function 1

// const func1=()=>{
//     console.log("Inside function 1 ");
//     func2();
// } 


// const func2 =()=>{
//     console.log("Insude function 2 ");
    
// }
// func1();

// case 3  passing as parameter
// const func1=(callback)=>{
//     console.log("Inside function 1 ");
//     callback();
// } 


// const func2 =()=>{
//     console.log("Insude function 2 ");
    
// }
// func1(func2);
//case directly passing the function to func as anonymius function
// const func1=(callback)=>{
//     console.log("Inside function 1 ");
//     callback();
// } 


// func1(()=>{
//     console.log("Insude function 2 ");});


// DOM
// add element in html

// const header2 = document.body.appendChild(document.createElement("h2"));
// const p = document.createElement("p");
// document.body.appendChild(p)


//-------------list
// document.body.appendChild(document.createElement("h2")).innerText="List of students ";

// const ul = document.createElement("ul")
// document.body.appendChild(ul)

// // html= ``;

// const Fruits =["Apple","Banana","WaterMelon","Tomato"];
// Fruits.forEach((fruit,index)=>{
//     // html+=`<li>${index} :${fruit}</li>`
//     let li = document.createElement("li");
//     ul.appendChild(li)
//     li.innerText =`${index} :${fruit}`;
//     console.log(fruit);
   
// })

// // console.log(html);

// // ul.innerHTML=html;


//-------object------

let studentsList=[
    {
        id:101,
        firstName:"Jayesh",
        lastName:"Vichare",
        email:"jayesh@gmail.com"
    },
    {
        id:102,
        firstName:"Nitin",
        lastName:"Shinde",
        email:"nitin@gmail.com"
    },
    {
        id:103,
        firstName:"Rupesh",
        lastName:"Singh",
        email:"rupesh@gmail.com"
    },
    {
        id:104,
        firstName:"Yogi",
        lastName:"Maurya",
        email:"yogi@gmail.com"
    },
    {
        id:105,
        firstName:"Mayur",
        lastName:"Patil",
        email:"mayur@gmail.com"
    }
];


const table =  document.body.appendChild(document.createElement("table"))
const thead = table.appendChild(document.createElement("thead"))
const tr = thead.appendChild(document.createElement("tr"))
tr.appendChild(document.createElement("td")).innerText="  Id   "
tr.appendChild(document.createElement("td")).innerText="FirstName"
tr.appendChild(document.createElement("td")).innerText="LastName"
tr.appendChild(document.createElement("td")).innerText="Email"

const tbody =table.appendChild(document.createElement("tbody"))

studentsList.forEach((student)=>{
    const tr =  tbody.appendChild(document.createElement("tr"));
    
        tr.appendChild(document.createElement("td")).innerText =`${student.id}`
        tr.appendChild(document.createElement("td")).innerText =`${student.firstName}`
        tr.appendChild(document.createElement("td")).innerText =`${student.lastName}`
        tr.appendChild(document.createElement("td")).innerText =`${student.email}`


   
})
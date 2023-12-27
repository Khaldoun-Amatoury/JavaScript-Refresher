// import { x } from "./util.js";

// console.log(x);
//if no default
// import { apiKey } from "./util.js";
//if default
// import apiKey from "./util.js";
// import {apiKey, abc} from "./util.js";

/*import * as util from "./util.js";
import multiply from "./math.js";

console.log(util.abc);
console.log(util.apiKey);
console.log(util.default);

console.log(multiply(3, 4));*/

//import export lesson done

//variables and values lesson begins

//variables
// let userMesssage = "Khaldoun!"

//console.log(userMesssage);
// console.log(userMesssage);

//consts: must not be reassigned

//const userMesssage = "Khaldoun!"

// userMesssage = "New Value"; //error const

//console.log(userMesssage);
//console.log(userMesssage);

//operators lesson begin
//operators:
//math:
/*
console.log(10 + 5);
console.log(10 - 5);
console.log(10 / 5);
console.log(10 % 5);
console.log("Hello" + " World!");
console.log(10 === 5); //boolean false
console.log(10 === 10); //true
console.log(10 <= 10);
console.log(10 >= 10);

if (10===10) {
  console.log("works");
}
*/

//end

//functions and parameters lesson

/* function greet() { //function definition
  console.log("Hello!");
} */
// greet();

/* function greetUser(userName, message = "Hello!") {
  //message has a default value
  console.log(userName);
  console.log(message);
}

//you should call the function to be executed

greetUser("Max");
greetUser("Manuel", "Hello, what's up?"); //override the message value

function createGreeting(userName, message = "Hello!") {
  //message has a default value
  //console.log(userName);
  //console.log(message);

  return "Hi, I am " + userName + " " + message;
}
//return so you should store it in a variable when calling
console.log(createGreeting("Max"));
//or
const greeting1 = createGreeting("Max");
console.log(greeting1); */

//end

//arrow function lesson:

//anonymous function
/*
export default (){
  console.log("Hello");
}
*/
//or
/*
export default (userName, message) => {
  console.log("Hello");
  return userName + message;
}*/

//there is a document explaining more after this lesson
//end

//Revisiting Objects and Classes Lesson Begins

//const userName = 'Max';
//const userAge = 34;

//group those two in an object
/* 
 const user = {
  name: 'Max',
  age: 34,
  greet() {
    console.log("Hello");
    console.log(this.age); //34
  }
 };

 console.log(user);
 console.log(user.name); //accessing value in an object
 user.greet();

 //class keyword for objects not used too much

 class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log("Hi!");
  }
 }

 const user1 = new User("Manuel", 35);
 console.log(user1);
 user1.greet(); */

//class end

//Arrays begins

// const hobbies = ["sports", "cooking", "reading"]; //have values stored in a specific order

// console.log(hobbies[0]);

//you can have an array of nested arrays also and you have objects in arrays

//built in array utility methods

/* hobbies.push("working");
console.log(hobbies); */

//findindex method

/* const index = hobbies.findIndex((item) => {
  return item === 'sports'
}) */

/* const index = hobbies.findIndex((item) => item === 'sports');
console.log(index); */

//map: transforms
//the array will stay unchanged and map will return a new array
/* const editedHobbies = hobbies.map((item) => item + "!");

console.log(editedHobbies); */
//object wrap the obejct with paranthesis that tells js that this is a object
/* 
const editedHobbies1 = hobbies.map((item) => ({text: item}));
console.log(editedHobbies1) */

/* const numberArray = [1, 2, 3];

function transformToObjects(numberArray){
  return numberArray.map((number) => ({val:number}));
}
 */
// console.log(transformToObjects(numberArray))

//or

// const numberArray2 = console.log(transformToObjects(numberArray));

//Destructing:

// const userNameData = ["Max", "Shwarzmuller"];

//const firstName = userNameData[0];
//const lastName = userNameData[1];

//instead
//destructering

// const [firstName, lastName] = ["Max", "Shwarzmuller"];

// console.log(firstName);
// console.log(lastName);

// const user={
//   name: "Max",
//   age: 34
// };

// const name = user.name;
// const age = user.age;

//instead
/* 
const {name: userName, age} = { //here username is an alias for name
  name: "Max", //use same property names here as above
  age: 34
};

console.log(userName);
console.log(age); */

//spread operator

/* const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34
};

const newHobbies = ["Reading"];
const mergedHobbies1 = [hobbies, newHobbies];
//spread operator gives the actual values it pulls out values from array and adds them as comma separate into new array
const mergedHobbies2 = [...hobbies, ...newHobbies];

const mergedHobbies = [...hobbies];

console.log(mergedHobbies)
console.log(mergedHobbies1)
console.log(mergedHobbies2); */

/* const user={
  name: "Max",
  age: 34
};

const extendedUser = {
  isAdmin: true,
  ...user //pulls out all key value pairs from user object and adds them here
}

console.log(extendedUser) */

//Control Structures lesson begins

/* const password = prompt("Your password");

if (password === "Hello") {
  console.log("Hello World!");
} else if (password === "hello") {
  console.log("Hello works");
} else {
  console.log("Access denied");
}
const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies ){
  console.log(hobby);
} */

//DOM Manipulation lesson begins

// const list = document.querySelector("ul");
//list.remove();

//Using functions as values lesson begins:
/*
function handleTimeout() {
  console.log("Timed Out!")
}

const handleTimeout2 = () => {
  console.log("Timed out...again!")
};

// setTimeout(handleTimeout());

setTimeout(handleTimeout, 2000);

setTimeout(handleTimeout2, 3000);

setTimeout(()=> {
  console.log("More timing out...");
}, 4000);

function greeter (greetFn) {
  greetFn();
}

greeter(() => console.log("Hi"));
*/

//Defining functions inside of functions lesson begins:
/*
function init() {
  function greet() {
    console.log("hello")
  }

  greet();
}

//greet(); //you can only execute greet inside of init 

init(); //outputs hello //internally calls greet
//Execute functions inside other functions

//References vs Primitive values lesson begins:

let userMessage = "Hello!"; //thrown away not edited if overriden

userMessage = "Hello there";

userMessage = userMessage.concat('!!!'); //makes new value

const hobbies = ["Sports", "Cooking"]; //const means variable can't be overriden so I can't do this hobbies =[]; but I can absolutely store objects inside it and those objects are referenced and manipulates by taking the address and put new items in memory where I store the address in the const and address doesn't change so I am editing the value behind the address so that is allowed even in const

hobbies.push("Working"); //edit the original array
console.log(hobbies); //arrays are objects and objects are referenced variables where it takes its address and reaches out the address and opens the value at the address and ads the new item in memory

//While primitive values like strings

const message ="Hello"; //you don't have address thing just in objects and arrays and etc. So you can't manipulate the value of const
*/
/*Primitive Values:
Primitive values are immutable data types, such as numbers, strings, booleans, null, and undefined.
When you work with primitive values, any operation that appears to modify the value actually creates a new value in memory rather than modifying the original value.
Assigning a new value or performing operations on a primitive type variable creates a copy of that value in memory.
For example:

javascript
Copy code
let a = 5;
let b = a; // Here, the value of 'a' (5) is copied to 'b'

b = 10; // Changing 'b' does not affect 'a'
console.log(a); // Output: 5
console.log(b); // Output: 10
Reference Values:
Reference values are objects (including arrays, functions, and objects created by the user).
When you work with reference values, variables don't actually store the object directly but instead store a reference (memory address) pointing to where the object is stored.
Operations or changes made to the reference value directly affect the original object in memory.
For example:

javascript
Copy code
let arr1 = [1, 2, 3];
let arr2 = arr1; // Both 'arr1' and 'arr2' reference the same array in memory

arr2.push(4); // Modifying 'arr2' affects 'arr1' because they reference the same array
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]
Key Differences:
Mutability: Primitive values are immutable, while reference values are mutable.
Storage: Primitive values are stored directly in the variable's memory location, while reference values are stored as a reference to the location in memory where the actual value is stored.
Passing: When passed as arguments to functions, primitives are passed by value (a copy is made), and references are passed by reference (the actual reference is passed, so changes inside the function affect the original object). 
*/

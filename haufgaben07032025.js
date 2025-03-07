// contact 

const arr1 = ["Jan", "Mike"];
const arr2 = ["Tobiason", "Tobias", "Linux"];
const children = arr1.concat(arr2);

// filter() 

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// indIndex()

const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

// findLast() 

const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.findLast(checkAge);
} 

// findLastIndex() 

const ages = [3, 10, 18, 20];

ages.findLastIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

// flat() 

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

// includes() 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

// indexOf() 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

// join () 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();

// length() 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

// map() 

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)

// pop()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); 

// push() 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

// reduce()

const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
} 

// reduce() 

const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
} 

// slice() 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// sort() 

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
fruits.sort();

// splice() 

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");

// toString() 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.toString();
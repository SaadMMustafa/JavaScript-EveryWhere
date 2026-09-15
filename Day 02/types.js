// Declared one variable of each primitive: string, number, boolean, null, undefined
const myName = "Saad";
const myAge = 27;
const isMarried = true;
const myCar = null;
const iPhone = undefined;

// Declared one object and one array
const mySkills = {
    profession: "cemistry",
    graphic : "Whiteboard Animation"
};
const pLanguages = ["JavaScript", "C++"];

// Printed each with its typeof, formatted like name → "Sara" → string
console.log("My Name " + " → " + myName + " → " +  + typeof myName);
console.log("My Age" + " → " + myAge + " → " + typeof myAge);
console.log("Marriage" + " → " + isMarried + " → " + typeof isMarried);
console.log("My Car" + " → " + myCar + " → " + typeof myCar);
console.log("iPhone" + " → " + iPhone + " → " + typeof iPhone);
console.log("My Skills" + " → " + mySkills + " → " + typeof mySkills);
console.log("Programming Languages" + " → " + pLanguages + " → " + typeof pLanguages);

console.log("--------------");

console.log(typeof null);
console.log(typeof []);
console.log(typeof [{ name: 'Saad', age: '27' }, { name: 'Saad', age: '27' }]);

console.log("--------------");

const number = "42";
console.log(typeof number);
console.log(typeof +number);

console.log("--------------");

const string = 42;
console.log(typeof string);
console.log(typeof string.toString());

console.log("--------------");

console.log(Number("hello"));
console.log(typeof Number("hello"));

console.log("--------------");

console.log(parseInt("42px"));
console.log(Number("42px"));

console.log("--------------");

const array = [false, 0, -0, 0n, "", null, [], {}, "0", "hello"];
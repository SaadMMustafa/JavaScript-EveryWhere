console.log("5" + 3);             // 53            // 53          >> 
console.log("5" - 3);             // 2             // 2           >>
console.log(5 + true);            // 6             // 6           >>
console.log("5" === 5);           // false         // false       >>
console.log("5" == 5);            // true          // true        >>
console.log(typeof null);         // null          // object      >> null is a primitive value has no value.
console.log(typeof []);           // array         // object      >> brackets of array.
console.log(0 || "default");      // true          // default     >> "default" is equal to true.
console.log(0 ?? "default");      // true          // 0           >>
console.log(Boolean(""));         // 0             // false       >>
console.log(Boolean("false"));    // 0             // true        >>
console.log(Boolean([]));         // 0             // true        >>
console.log(10 % 3);              // 1             // 1           >>
console.log(null + 1);            // 1             // 1           >>
console.log(undefined + 1);       // undefined     // NaN         >>
// console.log("run");
/////////synchronous code----------

// console.log("Start");
// console.log("Middle");
// console.log("End");
 
////////ASYNCHRONOUS CODE-----------

// console.log("Start");

// setTimeout(() => {
//     console.log("This happens later");
// }, 1000);

// console.log("End");

///////BOTH SYNCHRONOUS AND ASYNCHRONOUS--------

/*function doWork(sync = true) {
    if (sync) {
        // Synchronous logic
        console.log("Running synchronously...");
        return "Sync Result";
    } else {
        // Asynchronous logic (return a Promise)
        console.log("Running asynchronously...");
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Async Result after delay");
            }, 1000);
        });
    }
}

// Example usage:

// Sync version
const syncResult = doWork(true);
console.log("Sync Result:", syncResult);

// Async version with async/await
(async () => {
    const asyncResult = await doWork(false);
    console.log("Async Result:", asyncResult);
})();
 
/////-------------------ASSIGNMENT NO 1---------------///////

////Qno1
function multiply(a, b) {
    return a * b;
}

// Test cases:
console.log(multiply(2, 3));      // 6
console.log(multiply(5, -4));     // -20
console.log(multiply(0, 10));     // 0

/////Qno2
function greeting(name) {
    return `Hello, ${name}!`;
}

// Test cases:
console.log(greeting("Alice"));   // Hello, Alice!
console.log(greeting("Bob"));     // Hello, Bob!

///qno3
const sumArray = numbers => numbers.reduce((total, num) => total + num, 0);

// Test cases:
console.log(sumArray([1, 2, 3]));           // 6
console.log(sumArray([10, -5, 7, 3]));      // 15
console.log(sumArray([]));                  // 0

///qno4
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Test cases:
console.log(calculateBMI(70, 1.75));    // ~22.86
console.log(calculateBMI(50, 1.6));     // ~19.53
console.log(calculateBMI(90, 1.8));     // ~27.78

///qno5
const stringLength = str => str.length;

// Test cases:
console.log(stringLength("Hello"));     // 5
console.log(stringLength(""));          // 0
console.log(stringLength("JavaScript"));// 10

///qno6
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases:
console.log(reverseString("hello"));     // "olleh"
console.log(reverseString("racecar"));   // "racecar"
console.log(reverseString("JavaScript"));// "tpircSavaJ"

////qno7
const greetPerson = person => `Hello, ${person.first} ${person.last}!`;

// Test cases:
console.log(greetPerson({ first: "John", last: "Doe" }));      // Hello, John Doe!
console.log(greetPerson({ first: "Jane", last: "Smith" }));    // Hello, Jane Smith!

///qno8
function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test cases:
console.log(capitalize("hello"));      // "Hello"
console.log(capitalize("javaScript")); // "JavaScript"
console.log(capitalize(""));           // ""

////qno9
const capitalizeArray = arr => arr.map(str => 
    str.charAt(0).toUpperCase() + str.slice(1)
);

// Test cases:
console.log(capitalizeArray(["hello", "world"]));    // ["Hello", "World"]
console.log(capitalizeArray(["javaScript", "rocks"]));// ["JavaScript", "Rocks"]
console.log(capitalizeArray([]));                    // []

/////qno10
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Test cases:
console.log(isPalindrome("racecar"));    // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("madam"));      // true */

//////////////////////////----------------END ASSIGNMENT NO 1-------------/////////////////////////

            ///////////////---------ASSIGNMENT NO 2------------////////////////
            



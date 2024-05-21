//Primitive Data Types?
////Every primitive data type needs to have a falsey.

// Boolean - False
// Strings - ""

// Numbers - 0
// Undefined, Null - They are already falsey

////-> Data Structures
// Arrays -> []
// Objects -> {}

// NaN - Is it its own falsey?

const testThisValue = {};

function isThisFalsey(value){
    if(!value){
        console.log("This value is falsey!")
    }
}

isThisFalsey(testThisValue);

console.log(5 * "String")
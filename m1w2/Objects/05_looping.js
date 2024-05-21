//How can we iterate(or loop) through objects?
// What are some ways that we loop through arrays?
// For..in -> loops through keys
// For..of -> loops through the elements of an array
// c-style loop

const arrayOfNumbers = [1,2,3,4,5]
// {
//     0: 1,
//     1: 2,
//     ...
// }
const objectOfChocolateBrands = {
    Mars: "Snickers", //0
    Herseys: "Reese", // 1
    Lindt: "Lindor", // 2
    aRandomObject: {
        random: "String"
    }
}
// for(const key in objectOfChocolateBrands){
//     // How can we console log the values of each key?
//     console.log(objectOfChocolateBrands[key]);
// }
// Extract only the keys and loop through those
const keysOfObject = Object.keys(objectOfChocolateBrands)
console.log(keysOfObject)
// Extract only the values and loop through those
const valuesOfObject = Object.values(objectOfChocolateBrands)
console.log(valuesOfObject)

// for(const element of objectOfChocolateBrands){
//     console.log(element)
// }
console.log(Object.entries(objectOfChocolateBrands))
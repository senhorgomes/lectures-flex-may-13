//Everything in Javascript is an Object. Methods? What are those?
const carObject1 = {
    // Each value with a key
    // key: value
    amountOfWheels: 4,
    amountOfDoors: 4,
    color: "Red",
    engineType: "Electric",
    changeCarColor: function(newColor){
        // If we can do whatever we can, can we modify this object?
        carObject1.color = newColor
    }
}
// array[0]
// console["log"]("Hello")
carObject1.changeCarColor("Rainbow")
// Is this going to be Red? Blue? Or crash my computer?
console.log(carObject1.color)

console.log("Hello")

// Object{function}
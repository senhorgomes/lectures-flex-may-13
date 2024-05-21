//Two ways to look up values in objects
// array[0]
// Dot notation
// Square Bracket Notation -> Bracket Notation
// Differences between the two?
// Advantages?
const carObject1 = {
    // Each value with a key
    // key: value
    amountOfWheels: 4,
    amountOfDoors: 4,
    color: "Red",
    engineType: "Electric",
    // engineType: "Hybrid",
}
// Dot notation:

// console.log(carObject1.engineType)

// Square Bracket Notation
// console.log(carObject1["amountOfWheels"])
// const aRandomKeyVariable = "amountOfWheels"
// console.log(carObject1[aRandomKeyVariable])

// Can we create new key values?
carObject1.engineType = "Gas engine"
// aRandomKeyVariable has not been assigned a value yet
// console.log(carObject1.aRandomKeyVariable)
// We are assigning aRandomKeyVariable to a value
carObject1.aRandomKeyVariable = ["A random string"]
// console.log(carObject1.aRandomKeyVariable)

const carObject2 = {
    // Each value with a key
    // key: value
    engineType: "Gas Engine",
    amountOfDoors: 2,
    color: "Purple",
    amountOfWheels: 4,
    // amountOfWheels: 4,
}

delete carObject2.color
console.log(carObject2)
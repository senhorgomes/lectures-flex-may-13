//Why objects?
// List information about a car
// How many wheels
// How many doors
// The color of the car
// Electric, Hybrid, Gas Engine
const cars1 = [4,4,"Red", "Electric"];
const cars2 = [4,2,"Purple", "Gas Engine"];

const cars3 = ["Bright Pink", 4, "Hybrid", 4]


// But this only works because I gave you the context
// Hey can you console log the amount wheels for each car

// If we want to list a specific item, we want to use objects

const carObject1 = {
    // Each value with a key
    // key: value
    amountOfWheels: 4,
    amountOfDoors: 4,
    color: "Red",
    engineType: "Electric"
}
const carObject2 = {
    // Each value with a key
    // key: value
    engineType: "Gas Engine",
    amountOfDoors: 2,
    color: "Purple",
    amountOfWheels: 4,
    // amountOfWheels: 4,
}

// What happens if we want to have a list of items

const listOfCars = [carObject1, carObject2]
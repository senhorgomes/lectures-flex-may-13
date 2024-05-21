//Easier way to access this bigObject?

const bigObject = {
  level: 1,
  floors: {
    basement: {
      level: -1,
    },
    main: {
      level: 1,
      floors: {
        second: {
          level: 2,
        },
        third: {
          level: 3
        },
        fourth: {
          level: 4
        }
      }
    }
  },
}
const mainFloor = bigObject.floors.main.floors
// console.log(bigObject["floors"]["main"]["floors"]["second"]["level"])
// console.log(bigObject.floors.main.level)
// console.log(mainFloor.level)
// console.log(mainFloor.second.level)
// console.log(mainFloor.third.level)
// console.log(mainFloor.fourth.level)

console.log(Object.entries(bigObject));
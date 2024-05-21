//this???

const dogObject = {
    breed: "Husky",
    age: 2,
    color: "Grey",
    happyBirthday: function(){
        this.age ++
    },
    randomObject: {
        name: "Bryan",
        // age
        writeName: function(){
            // "Bryan"
            //undefined
            // computer breaks, lecture ends early
            console.log(this.age)
        }
    }
}
//dogObject.anotherRandomObject = undefined
// undefined.color
const variable = dogObject.anotherRandomObject
if(variable){
    console.log(variable.color)
}
// const dogObject2 = {
//     breed: "Husky",
//     age: 2,
//     color: "Grey",
//     happyBirthday: function(){
//         dogObject.age ++
//     }
// }
//3
// dogObject.happyBirthday()
// //4
// dogObject.happyBirthday()
// console.log(dogObject.age)
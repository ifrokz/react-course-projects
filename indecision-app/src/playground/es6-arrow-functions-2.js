//  // arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//     // console.log(arguments);
//     return a + b;
// }
// console.log(add(55,1,100));

//  // this keyword - no longer bound

//  const user = {
//     name : 'Ivan',
//     cities: ['Valencia', 'Barcelona', 'Madrid'],
//     printPlacesLived() {
//         // forEach: recorre el array con un alias como argumento que contiene el valor.
//         // this.cities.forEach((city) =>{
//         //     console.log(this.name + ' has lived int ' + city);
//         // });

//         // map: recorre igual que forEach, pero devuelve un valor, de manera que podemos modificar los datos
//         // al crear un nuevo array.
//         return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
//     }
//  };

//  console.log(user.printPlacesLived());

// Challenge area.

const multiplier = {
    numbers: [2, 6, 10, 50],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((n) => n * this.multiplyBy );
    }
}

console.log(multiplier.multiply());
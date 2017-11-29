// function square (x){
//     return x * x;
// };
// console.log(square(2));


// // const squareArrow = (x) => 
// // {
// //     return x * x
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(5));

const fullName = 'Jen Mead';

const secondNameArrow = (fullName) => {
    return fullName.split(' ')[1];
}
console.log('firstNameArrow: ',secondNameArrow(fullName)); 

const fisrtNameShortArrow = (fullName) => fullName.split(' ')[0];
console.log('firstNameShortArrow: ', fisrtNameShortArrow(fullName));
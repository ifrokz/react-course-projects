export const canDrink =  (age ) => age >= 21 ? true : false;

function x (){
    return 'Es adulto.';
}

export const isAdult = (age) => age >= 18 ? x() : false;
export default (age ) => age >= 65 ? 'Is senior.' : 'Not a senior.';
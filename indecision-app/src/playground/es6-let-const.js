var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Ivan';
nameLet = 'Adrian';
// nameLet = 'Adrian'; Da error por duplicar la declaracion.
console.log('nameLet', nameLet);

const nameConst = "NombreConstante";
// nameConst = 'x'; Da error porque es un valor constante.
console.log('nameConst', nameConst);


// Block scoping.
const fullName = 'Andrew Mead';

let firstName;
        // var si se eria fuera del if,
        // let no, por eso hay que declararlo fuera  
        // si queremos que se pueda 
        // utilizar fuera del scope del if.
if(fullName){ 
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
